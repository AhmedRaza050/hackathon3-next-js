




import Image from "next/image";
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
            <Image src="/Maps.png" alt="maps"   height={200}
           width={300} className="w-[486px] h-[272px] object-cover"/>
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex justify-center ">
          <div className=" rounded-lg p-4 flex  space-x-4 mb-6">
            <Image
src="/DR.png"
alt="Nissan GT-R"
height={100}
width={100}
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
            <Image  height={200}
           width={200} src="/top5.png" alt="analysis" className=" w-[524px] h-[324px] object-cover"/>
          </div>
  
          {/* Recent Transactions */}
          <div className="w-[524px] h-[480px] bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 flex justify-between">
              Recent Transactions <span className="text-blue-500">View All</span>
            </h2>
            <Image height={400} width={450} src="/transection.png" alt="trnasaction" className=" object-cover" />
          </div>
        </div>
      </div>
    );
  }
  