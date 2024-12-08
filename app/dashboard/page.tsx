// export default function Dashboard() {
//     return (
//       <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Details Rental Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Details Rental</h2>
//             <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src="/nissan-gt-r.jpg"
//                 alt="Nissan GT-R"
//                 className="w-24 h-16 rounded-md"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">Nissan GT-R</h3>
//                 <p className="text-sm text-gray-500">Sport Car</p>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-md font-medium">Pick-Up</h4>
//               <p className="text-sm text-gray-500">Location: Kota Semarang</p>
//               <p className="text-sm text-gray-500">Date: 20 May 2022</p>
//               <p className="text-sm text-gray-500">Time: 07:00</p>
//             </div>
//             <div className="mt-4">
//               <h4 className="text-md font-medium">Drop-Off</h4>
//               <p className="text-sm text-gray-500">Location: Kota Semarang</p>
//               <p className="text-sm text-gray-500">Date: 21 May 2022</p>
//               <p className="text-sm text-gray-500">Time: 01:00</p>
//             </div>
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold">Total Rental Price</h4>
//               <p className="text-2xl font-bold text-blue-600">$80.00</p>
//             </div>
//           </div>
  
//           {/* Right Side Section */}
//           <div>
//             {/* Top 5 Car Rentals */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//               <h2 className="text-xl font-semibold mb-4">Top 5 Car Rental</h2>
//               <div className="relative">
//                 <svg className="w-full h-32 text-blue-300" viewBox="0 0 42 42">
//                   <circle
//                     className="text-blue-600"
//                     stroke="currentColor"
//                     fill="transparent"
//                     strokeWidth="2"
//                     r="15.91549430918954"
//                     cx="21"
//                     cy="21"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <p className="text-lg font-bold">72,030</p>
//                 </div>
//               </div>
//               <ul className="mt-4">
//                 <li className="flex justify-between">
//                   <span>Sport Car</span>
//                   <span>17,439</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>SUV</span>
//                   <span>9,478</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Coupe</span>
//                   <span>18,197</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Hatchback</span>
//                   <span>12,510</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>MPV</span>
//                   <span>14,406</span>
//                 </li>
//               </ul>
//             </div>
  
//             {/* Recent Transactions */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold mb-4">Recent Transaction</h2>
//               <ul>
//                 {[
//                   { car: "Nissan GT-R", type: "Sport Car", price: "$80.00" },
//                   { car: "Koenigsegg", type: "Sport Car", price: "$99.00" },
//                   { car: "Rolls-Royce", type: "Luxury Car", price: "$96.00" },
//                   { car: "CR-V", type: "SUV", price: "$80.00" },
//                 ].map((transaction, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center justify-between py-3 border-b"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-8 bg-gray-300 rounded-md"></div>
//                       <div>
//                         <h4 className="text-md font-medium">{transaction.car}</h4>
//                         <p className="text-sm text-gray-500">{transaction.type}</p>
//                       </div>
//                     </div>
//                     <p className="text-md font-semibold">{transaction.price}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }






// import { FaCar, FaCogs, FaMoon, FaRegCalendarAlt, FaSignOutAlt, FaEnvelope, FaBars } from "react-icons/fa";

// export default function Dashboard() {
//   return (
//     <div className="max-w-[1440px] h-[900px] mx-auto flex gap-6 bg-white p-4">
//       {/* Sidebar/Main Menu */}
//       <div className="w-[286px] h-full bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
//         <div>
//           <h1 className="text-2xl font-bold mb-8">Main Menu</h1>
//           <ul className="space-y-6 text-gray-700">
//             <li className="flex items-center space-x-4">
//               <FaBars className="text-xl" />
//               <span className="text-lg font-medium">Dashboard</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <FaCar className="text-xl" />
//               <span className="text-lg font-medium">Car Rent</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <FaCogs className="text-xl" />
//               <span className="text-lg font-medium">Insight</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <FaEnvelope className="text-xl" />
//               <span className="text-lg font-medium">Reimburse</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <FaRegCalendarAlt className="text-xl" />
//               <span className="text-lg font-medium">Calendar</span>
//             </li>
//           </ul>
//         </div>
//         <div className="space-y-4">
//           <button className="flex items-center space-x-4 w-full text-left">
//             <FaMoon className="text-xl" />
//             <span className="text-lg font-medium">Dark Mode</span>
//           </button>
//           <button className="flex items-center space-x-4 w-full text-left">
//             <FaSignOutAlt className="text-xl" />
//             <span className="text-lg font-medium">Log Out</span>
//           </button>
//         </div>
//       </div>

//       {/* Details Rental */}
//       <div className="w-[534px] h-[836px] bg-gray-50 p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Details Rental</h2>
//         <div className="bg-blue-100 rounded-lg p-4 flex items-center space-x-4">
//           <img
//             src="/car.png"
//             alt="Nissan GT-R"
//             className="w-24 h-16 object-cover rounded-md"
//           />
//           <div>
//             <h3 className="text-xl font-semibold">Nissan GT-R</h3>
//             <p className="text-gray-500">Sport Car</p>
//           </div>
//         </div>
//         {/* Add map and other components */}
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col space-y-6">
//         {/* Top 5 Car Rental */}
//         <div className="w-[524px] h-[324px] bg-gray-50 p-6 rounded-lg shadow">
//           <h2 className="text-2xl font-bold mb-4">Top 5 Car Rental</h2>
//           <div>
//             {/* Add Pie Chart or Graph */}
//           </div>
//         </div>

//         {/* Recent Transactions */}
//         <div className="w-[524px] h-[480px] bg-gray-50 p-6 rounded-lg shadow">
//           <h2 className="text-2xl font-bold mb-4 flex justify-between">
//             Recent Transactions <span className="text-blue-500">View All</span>
//           </h2>
//           <ul>
//             <li className="flex justify-between mb-4">
//               <div className="flex space-x-4">
//                 <img
//                   src="/car.png"
//                   alt="Nissan GT-R"
//                   className="w-16 h-10 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">Nissan GT-R</h3>
//                   <p className="text-gray-500">Sport Car</p>
//                 </div>
//               </div>
//               <p className="text-lg font-medium">$80.00</p>
//             </li>
//             {/* Add more transactions */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }




import { AiFillSignal } from "react-icons/ai";
import {
    FaCar,
    FaCogs,
    FaMoon,
    FaRegCalendarAlt,
    FaSignOutAlt,
    FaEnvelope,
    FaBars,
    FaUser,
    FaSun,
  } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { TiBriefcase } from "react-icons/ti";
  
  export default function Dashboard() {
    return (
      <div className="max-w-[1440px] h-[900px] mx-auto flex gap-6 bg-white p-4">
        {/* Sidebar/Main Menu */}
        <div className="w-[286px] h-full bg-white p-4 rounded-lg flex flex-col justify-between">
          <div>
            <h1 className="text-sm font-semibold my-4 mx-2 text-[#94A7CB] ">Main Menu</h1>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-4">
                <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center bg-[#3563E9]">
                <FaBars className="text-xl w-6 h-6  text-white" />
                <span className="text-base text-[#FFFFFF] font-medium">Dashboard</span></div>
              </li>
              <li className="flex items-center space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
                <FaCar className="text-xl w-6 h-6  text-[#90A3BF]" />
                <span className="text-base text-[#90A3BF] font-medium">Car Rent</span></div>
              </li>
              <li className="flex items-center space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
              <AiFillSignal  className="text-xl w-6 h-6  text-[#90A3BF]"/>
                <span className="text-base text-[#90A3BF] font-medium">Insight</span> </div>
              </li>
              <li className="flex items-center space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
                <FaEnvelope className="text-xl w-6 h-6  text-[#90A3BF]" />
                <span className="text-base text-[#90A3BF] font-medium">Reimburse</span> </div>
              </li>
              <li className="flex items-center space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
                <FaRegCalendarAlt className="text-xl w-6 h-6  text-[#90A3BF]"/>
                <span className="text-base text-[#90A3BF] font-medium">Calendar</span> </div>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-sm font-semibold my-4 mx-2 text-[#94A7CB] ">PREFERENCE</h1>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-4">
                <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
                <IoSettingsOutline className="text-xl w-6 h-6  text-[#90A3BF]" />
                <span className="text-base text-[#90A3BF] font-medium">Settings</span></div>
              </li>
              <li className="flex items-center space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
              <TbHelp className="text-xl w-6 h-6  text-[#90A3BF]" />
                <span className="text-base text-[#90A3BF] font-medium">Help & Center</span></div>
              </li>
              
              
              <li className="flex items-center justify-between space-x-4">
              <div className="w-[254px] h-[56px] rounded-[10px] flex gap-3 px-2 items-center ">
              <TiBriefcase className="text-xl w-6 h-6  text-[#90A3BF]"/>
                <span className="text-base text-[#90A3BF] font-medium">Dark Mode</span> </div>
                <div className="w-[63px] h-[34px] bg-[#F6F7F9] rounded-full border border-[#90A3BF] flex items-center ">
              <div className="w-7 h-7 bg-[#3563E9] rounded-full px-2 py-1"> <FaSun className="text-xl w-4 h-4  text-white"/> </div>
              <div className="w-7 h-7 bg-[#FFFFFF] rounded-full px-2 py-1"> <FaMoon className="text-xl w-4 h-4  text-[#90A3BF]" /></div>
            </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4 mx-2">
            
            <button className="flex items-center space-x-4 w-full text-left">
              <FaSignOutAlt  className="text-xl w-6 h-6  text-[#90A3BF]" />
              <span className="text-base text-[#90A3BF] font-medium">Log Out</span>
            </button>
          </div>
        </div>
  
        {/* Details Rental */}
        <div className="w-[534px] h-[836px] bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-6">Details Rental</h2>
          <div>
            <img src="/Maps.png" alt="maps"  className="w-[486px] h-[272px] object-cover"/>
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex justify-center ">
          <div className=" rounded-lg p-4 flex  space-x-4 mb-6">
            <img
src="/DR.png"
alt="Nissan GT-R"
className="w-22 h-16 object-cover rounded-md"
/><div>
              <h3 className="text-base font-semibold">Nissan GT-R</h3>
              <p className="text-gray-500">Sport Car</p>
            </div>
          </div>
          <p className="text-sm font-semibold my-4 mx-2 text-[#94A7CB] ">#9761</p>

            </div>
            
          </div>
          <div className="space-y-6">
  {/* Pick-Up Section */}
  <div>
    <div className="flex items-center space-x-3">
      <input
        type="radio"
        name="trip"
        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
        checked
      />
      <h3 className="text-base font-semibold text-gray-700">Pick - Up</h3>
    </div>
    <div className="flex space-x-9  rounded-md p-3 w-full max-w-md mt-2">
      {/* Location Dropdown */}
      <div className="flex-1">
        <label className="block text-sm text-gray-500">Locations</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>Kota Semarang</option>
        </select>
      </div>
      {/* Date Input */}
      <div className="flex-1">
        <label className="block text-base text-gray-500">Date</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>20 July 2022</option>
        </select>
      </div>
      {/* Time Input */}
      <div className="flex-1">
        <label className="block text-base text-gray-500">Time</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>07.00</option>
        </select>
      </div>
    </div>
  </div>

  {/* Drop-Off Section */}
  <div>
    <div className="flex items-center space-x-3">
      <input
        type="radio"
        name="trip"
        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <h3 className="text-base font-semibold text-gray-700">Drop - Off</h3>
    </div>
    <div className="flex space-x-9  rounded-md p-3 w-full max-w-md mt-2">
      {/* Location Dropdown */}
      <div className="flex-1">
        <label className="block text-base text-gray-500">Locations</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>Kota Semarang</option>
        </select>
      </div>
      {/* Date Input */}
      <div className="flex-1">
        <label className="block text-base text-gray-500">Date</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>21 July 2022</option>
        </select>
      </div>
      {/* Time Input */}
      <div className="flex-1">
        <label className="block text-base text-gray-500">Time</label>
        <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none">
          <option>01.00</option>
        </select>
      </div>
    </div>
  </div>
</div>

 
          
            
          <div className="flex justify-between items-center"> 
            <div className="mt-6 flex flex-col">
              <h4 className="font-medium text-2xl">Total Rental Price</h4>
              
              <p className="text-gray-500">Overall price includes rental discount</p>
            </div>
            <p className="text-3xl font-bold">$80.00</p>
        </div></div> 
  
        {/* Right Section */}
        <div className="flex flex-col space-y-6">
          {/* Top 5 Car Rental */}
          <div className="w-[524px] h-[324px] bg-gray-50 p-6 rounded-lg shadow">
            {/* <h2 className="text-2xl font-bold mb-4">Top 5 Car Rental</h2>
            <div className="flex justify-between">
            <img src="/" alt="" />
            <div className="space-y-4">
              <p>Sport Car: 17,439</p>
              <p>SUV: 9,478</p>
              <p>Coupe: 18,197</p>
              <p>Hatchback: 12,510</p>
              <p>MPV: 14,406</p>
            </div>
                
            </div>
            */}
            <img src="/top5.png" alt="analysis" className="object-cover"/>
          </div>
  
          {/* Recent Transactions */}
          <div className="w-[524px] h-[480px] bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 flex justify-between">
              Recent Transactions <span className="text-blue-500">View All</span>
            </h2>
            <img src="/transection.png" alt="trnasaction" className="object-cover" />
          </div>
        </div>
      </div>
    );
  }
  