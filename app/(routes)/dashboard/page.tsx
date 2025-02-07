
// import React from "react";
// import { AiFillSignal } from "react-icons/ai";
// import { FaBars, FaCar, FaEnvelope, FaMoon, FaRegCalendarAlt, FaSignOutAlt, FaSun } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";
// import { TbHelp } from "react-icons/tb";
// import { TiBriefcase } from "react-icons/ti";
// import Image from "next/image";

// export default function Dashboard() {
//   return (
//     <div className="max-w-[1440px] mx-auto p-4 flex flex-col lg:flex-row gap-6 bg-white">
//       {/* Sidebar/Main Menu */}
//       <div className="lg:w-[286px] w-full bg-white p-4 rounded-lg flex flex-col justify-between shadow-md">
//         <div>
//           <h1 className="text-sm font-semibold my-4 text-[#94A7CB]">Main Menu</h1>
//           <ul className="space-y-3">
//             <li>
//               <div className="flex items-center gap-3 p-3 bg-[#3563E9] rounded-md">
//                 <FaBars className="text-white text-xl" />
//                 <span className="text-white font-medium">Dashboard</span>
//               </div>
//             </li>
//             {/* Additional Menu Items */}
//             {[{ icon: <FaCar />, label: "Car Rent" }, { icon: <AiFillSignal />, label: "Insight" }, { icon: <FaEnvelope />, label: "Reimburse" }, { icon: <FaRegCalendarAlt />, label: "Calendar" }].map((item, index) => (
//               <li key={index}>
//                 <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
//                   {React.cloneElement(item.icon, { className: "text-[#90A3BF] text-xl" })}
//                   <span className="text-[#90A3BF] font-medium">{item.label}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h1 className="text-sm font-semibold my-4 text-[#94A7CB]">Preference</h1>
//           <ul className="space-y-3">
//             {/* Preference Items */}
//             {[{ icon: <IoSettingsOutline />, label: "Settings" }, { icon: <TbHelp />, label: "Help & Center" }].map((item, index) => (
//               <li key={index}>
//                 <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
//                   {React.cloneElement(item.icon, { className: "text-[#90A3BF] text-xl" })}
//                   <span className="text-[#90A3BF] font-medium">{item.label}</span>
//                 </div>
//               </li>
//             ))}

//             {/* Dark Mode Toggle */}
//             <li className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <TiBriefcase className="text-[#90A3BF] text-xl" />
//                 <span className="text-[#90A3BF] font-medium">Dark Mode</span>
//               </div>
//               <div className="flex items-center bg-gray-100 p-1 rounded-full w-14">
//                 <div className="bg-[#3563E9] w-6 h-6 rounded-full flex items-center justify-center">
//                   <FaSun className="text-white text-sm" />
//                 </div>
//                 <FaMoon className="text-gray-400 text-sm ml-2" />
//               </div>
//             </li>
//           </ul>
//         </div>

//         <button className="flex items-center gap-3 mt-6 text-gray-500">
//           <FaSignOutAlt className="text-xl" />
//           <span className="font-medium">Log Out</span>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col lg:flex-row gap-6">
//         {/* Details Rental */}
//         <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-bold mb-4">Details Rental</h2>
//           <Image src="/maps.png" alt="Map" width={500} height={200} className="w-full  object-cover rounded-lg" />
//           <div className="mt-4 flex items-center gap-4">
//             <Image src="/DR.png" alt="Nissan" width={64} height={64} className="object-cover rounded-md" />
//             <div>
//               <h3 className="text-base font-semibold">Nissan GT-R</h3>
//               <p className="text-sm text-gray-500">Sport Car</p>
//             </div>
//           </div>
//           <p className="text-sm text-gray-500 mt-2">#9761</p>

//           {/* Pickup and Drop-off Sections */}
//           <div className="mt-6 space-y-4">
//             {["Pick-Up", "Drop-Off"].map((label, index) => (
//               <div key={index}>
//                 <div className="flex items-center gap-2">
//                   <input type="radio" name="trip" checked={index === 0} />
//                   <h3 className="text-sm font-semibold">{label}</h3>
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2">
//                   {["Locations", "Date", "Time"].map((field, idx) => (
//                     <div key={idx} className="flex-1">
//                       <label className="block text-xs text-gray-500">{field}</label>
//                       <select className="w-full bg-white border rounded-md p-2 text-sm">
//                         <option>{field === "Locations" ? "Kota Semarang" : "20 July 2022"}</option>
//                       </select>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Additional Sections */}
//         <div className="w-full lg:w-1/3 space-y-6">
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md ">
//             <Image src="/top5.png" alt="Rental Analysis" width={500} height={300} className="w-full h-auto object-cover" />
//           </div>
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
//             <Image src="/transection.png" alt="Transactions" width={500} height={300} className="w-full  object-cover" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";
import { Calendar, Settings, HelpCircle, BarChart2, Car, Mail, LogOut } from 'lucide-react';
import Nissan from "../../../public/car1.png";
import Koen from "../../../public/car2.png";
import Rolls from "../../../public/car3.png";
import CR from "../../../public/car4.png";

const Dashboard = () => {
  // Data for the donut chart
  const carTypeData = [
    { name: "Sport Car", value: 17439, color: "#0D47A1" },
    { name: "SUV", value: 9478, color: "#1976D2" },
    { name: "Coupe", value: 18197, color: "#2196F3" },
    { name: "Hatchback", value: 12510, color: "#64B5F6" },
    { name: "MPV", value: 14490, color: "#90CAF9" }
  ];

  // Recent transactions data
  const recentTransactions = [
    { id: 1, car: "Nissan GT-R", type: "Sport Car", price: 80.00, img: Nissan },
    { id: 2, car: "Koenigsegg", type: "Sport Car", price: 99.00, img: Koen },
    { id: 3, car: "Rolls-Royce", type: "Sport Car", price: 96.00, img: Rolls },
    { id: 4, car: "CR-V", type: "SUV", price: 80.00, img:CR }
  ];

  // Custom Donut Chart Component
  const DonutChart = ({ data, size = 200 }: { data: { name: string; value: number; color: string }[]; size?: number }) => {
    const total = data.reduce((sum: number, item: { value: number }) => sum + item.value, 0);
    const center = size / 2;
    const radius = size * 0.4;
    const strokeWidth = size * 0.15;
    let currentAngle = 0;

    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${center},${center})`}>
          {data.map((item, index) => {
            const angle = (item.value / total) * 360;
            const largeArcFlag = angle > 180 ? 1 : 0;
            const startX = radius * Math.cos((currentAngle * Math.PI) / 180);
            const startY = radius * Math.sin((currentAngle * Math.PI) / 180);
            const endX = radius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const endY = radius * Math.sin(((currentAngle + angle) * Math.PI) / 180);

            const pathData = [
             `  M ${startX} ${startY}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
            ].join(' ');

            const path = (
              <path
                key={index}
                d={pathData}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
              />
            );

            currentAngle += angle;
            return path;
          })}
          <circle r={radius - strokeWidth} fill="white" />
          <text
            fill="#333"
            fontSize={size * 0.12}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {total.toLocaleString()}
          </text>
        </g>
      </svg>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white shadow-sm p-4 lg:p-6">
        {/* Logo or Brand */}
        <div className="mb-8">
          <h1 className="text-sm font-bold text-slate-400">MAIN MENU</h1>
        </div>

        {/* Main Menu */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg">
            <BarChart2 className="text-xl" />
            <span>Dashboard</span>
          </button>

          {[
            { icon: <Car />, label: "Car Rent" },
            { icon: <BarChart2 />, label: "Insight" },
            { icon: <Mail />, label: "Reimburse" },
            { icon: <Calendar />, label: "Calendar" }
          ].map((item, index) => (
            <button key={index} className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Preferences */}
        <div className="mt-8">
          <h2 className="text-xs uppercase text-gray-500 mb-2">Preferences</h2>
          {[
            { icon: <Settings />, label: "Settings" },
            { icon: <HelpCircle />, label: "Help & Center" }
          ].map((item, index) => (
            <button key={index} className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-lg">
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

<div className="px-4 py-4">
      
      </div>
        {/* Logout */}
        <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-100 rounded-lg mt-8">
          <LogOut />
          <span>Log Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Details Rental */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>

            {/* Map */}
            <div className="mb-4">
              <Image
                src="/Maps.png"
                alt="Map Image"
                className="w-full rounded-lg shadow-sm"
                width={500}
                height={200}
                layout="responsive"
              />
            </div>

            {/* Car Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <Image
                src="/car5.png"
                alt="car"
                width={120}
                height={50}
                className="w-full sm:w-auto bg-gray-200 rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">Nissan GT - R</h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p className="text-sm text-gray-500">#9761</p>
              </div>
            </div>

            {/* Pick-up/Drop-off Forms */}
            {["Pick-Up", "Drop-Off"].map((type, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <input type="radio" checked={index === 0} readOnly />
                  <span className="font-medium">{type}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Locations", "Date", "Time"].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-xs text-gray-500 mb-1">{field}</label>
                      <select className="w-full p-2 border rounded-lg text-sm">
                        <option>Select {field}</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Rental Price</p>
                  <p className="text-xs text-gray-400">Overall price rental discount</p>
                </div>
                <div className="text-xl font-bold">$80.00</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top 5 Car Rental */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Top 5 Car Rental</h2>
                <button className="text-gray-400">•••</button>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <DonutChart data={carTypeData} size={200} />
                </div>
                <div className="w-full md:w-1/2">
                  {carTypeData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transaction */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recent Transaction</h2>
                <button className="text-sm text-blue-600">View All</button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <Image
                          src={transaction.img}
                          alt={transaction.car}
                          width={64}
                          height={64}
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{transaction.car}</h3>
                        <p className="text-sm text-gray-500">{transaction.type}</p>
                      </div>
                    </div>
                    <div className="font-medium">${transaction.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;