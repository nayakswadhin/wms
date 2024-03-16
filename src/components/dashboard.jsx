"use client";
export default function dashboard() {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="grid grid-cols-2 gap-8 p-8 ">
        <div className="bg-gray-300 text-black p-4 rounded-md shadow-md h-[100px] flex items-center justify-center hover:bg-slate-400  hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2">
          <a href="/customizespace"> Create Customised Warehouse Model</a>
        </div>
        <div className="bg-gray-300 text-black p-4 rounded-md shadow-md h-[100px] flex items-center justify-center  hover:bg-slate-400  hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2 ">
          <a href="http://localhost:4000/">Market Analysis</a>
        </div>
        <div className="bg-gray-300 p-4 rounded-md text-black shadow-md h-[480px]  hover:ring-4   hover:bg-slate-400  hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2 ">
          <div className="flex justify-center">
            {" "}
            Current Inventory Statistics
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Total Quantity */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4 hover:text-black">
              <h2 className="text-xl font-bold mb-2">
                Total Quantity in Inventory
              </h2>
              <p>1000 units</p>
            </div>

            {/* Number of Small Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Small Sortable Items
              </h2>
              <p>500 units</p>
            </div>

            {/* Number of Large Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Large Sortable Items
              </h2>
              <p>300 units</p>
            </div>

            {/* Number of Large Non-Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Large Non-Sortable Items
              </h2>
              <p>200 units</p>
            </div>

            {/* Remaining Storage */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">Remaining Storage</h2>
              <p>2000 sq ft</p>
            </div>

            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">Maximum Storage</h2>
              <p>2000 sq ft</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-3 text-black rounded-md shadow-md h-[480px] hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2  hover:bg-slate-400 ">
          <div className=" flex justify-center">Transactions</div>
          <div className=" flex flex-col gap-[120px] font-bold mt-12">
            <div className=" ">Total Revenue</div>
            <div className=" ">Total Profit</div>
            <div className=" ">Cash Burn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
