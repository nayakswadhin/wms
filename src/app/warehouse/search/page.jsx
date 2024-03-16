"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "./search.svg";
import ProductCard from "./productcard";
import "./search.css";
import SideNav from "@/components/sidenav";
import Navbar from "@/components/navbar";
import axios from "axios";

export default function search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const searchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/admin/product`, {
        headers: {
          wareid: "65f4856d66ba597ad4570071",
        },
      });
      console.log("Response from backend:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setData("home");
      setIsLoading(false);
    }, 1000);
  }, []);


  if (isLoading) {
    return (
      <div className="flex mt-64 items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-56 h-56 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <div className="m-auto">
          <div className="search m-auto">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for Products"
            />
            <Image
              src={SearchIcon}
              alt="search"
              onClick={() => searchProducts(searchTerm)}
            />
          </div>
          {console.log(products?.length)}
          {products?.length > 0 ? (
            <div className="container flex m-auto">
              {products.map((product) => (
                <ProductCard
                  key={product.wareid}
                  productName={"ddht"}
                  productId={"sdf"}
                  size={"sdgsd"}
                  area={"sdfsd"}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No products found</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
