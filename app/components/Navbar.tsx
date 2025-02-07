



// import Image from "next/image";
// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import {  FaSlidersH, FaHeart, FaBell, FaCog } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <div className="max-w-[1440px] h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4  mx-auto bg-white">
//       {/* Top: Logo */}
//       <div className="flex items-center justify-between w-full sm:w-auto">
//         <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
//           MORENT
//         </h1>
//         {/* Profile Picture on Small Screens */}
//         <div className="w-11 h-11 bg-gray-200 rounded-full overflow-hidden ml-4 sm:hidden">
//           <Image
//             src="/profile.png"
//             alt="Profile"
//             width={100}
//             height={100}
//             className="w-11 h-11 object-cover"
//           />
//         </div>
//       </div>

//       {/* Center: Search Bar */}
//       <div className="flex items-center w-full sm:w-[492px] h-11 mt-4 sm:mt-0 sm:mr-20 border-[1px] border-[#C3D4E9] rounded-[70px] px-4">
//         <CiSearch className="w-6 h-6 text-[#596780]" />
//         <input
//           type="text"
//           placeholder="Search something here"
//           className="flex-grow px-2 py-1 outline-none text-gray-700"
//         />
//         <FaSlidersH className="text-gray-500" />
//       </div>

//       {/* Right: Icons */}
//       <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//         {/* Icons for Large Screens */}
//         <div className="hidden sm:flex items-center space-x-4">
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
//             <FaHeart className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//           </div>
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px] relative">
//             <FaBell className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//             {/* Notification Dot */}
//             <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full"></span>
//           </div>
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
//             <FaCog className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//           </div>
//         </div>

//         {/* Profile Picture on Large Screens */}
//          <Link href="/dashboard"><div className="hidden sm:block w-11 h-11 bg-gray-200 rounded-full overflow-hidden">
//           <Image
//             src="/profile.png"
//             alt="Profile"
//             width={100}
//             height={100}
//             className="w-11 h-11 object-cover"
//           />
//         </div>
//         </Link>
//       </div>
//     </div>
//   );
// }



// import { CiSearch } from "react-icons/ci";
// import { FaSlidersH, FaHeart, FaBell, FaCog,} from "react-icons/fa";
// import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// import { CgProfile } from "react-icons/cg";

// export default function Navbar() {
//   return (
//     <div className="max-w-[1440px] h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4 mx-auto bg-white">
//       {/* Top: Logo */}
//       <div className="flex items-center justify-between w-full sm:w-auto">
//         <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
//           MORENT
//         </h1>
//       </div>

//       {/* Center: Search Bar */}
//       <div className="flex items-center w-full sm:w-[492px] h-11 mt-4 sm:mt-0 sm:mr-20 border-[1px] border-[#C3D4E9] rounded-[70px] px-4">
//         <CiSearch className="w-6 h-6 text-[#596780]" />
//         <input
//           type="text"
//           placeholder="Search something here"
//           className="flex-grow px-2 py-1 outline-none text-gray-700"
//         />
//         <FaSlidersH className="text-gray-500" />
//       </div>

//       {/* Right: Icons + Authentication */}
//       <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//         {/* Icons for Large Screens */}
//         <div className="hidden sm:flex items-center space-x-4">
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
//             <FaHeart className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//           </div>
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px] relative">
//             <FaBell className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//             {/* Notification Dot */}
//             <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full"></span>
//           </div>
//           <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
//             <FaCog className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
//           </div>
//         </div>

//         {/* Clerk Authentication */}
//         <div>
//           <SignedOut>
//             <SignInButton>
//               <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
//                 <CgProfile  className="w-5 h-5" />
//               </button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>
//         </div>
//       </div>
//     </div>
//   );
// }




import { CiSearch } from "react-icons/ci";
import { FaSlidersH, FaHeart, FaBell, FaCog } from "react-icons/fa";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] h-auto sm:h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4 mx-auto bg-white">
      {/* Logo */}
      <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9]">
        MORENT
      </h1>

      {/* Search Bar */}
      <div className="flex items-center w-full sm:w-[492px] h-11 mt-4 sm:mt-0 sm:mr-20 border border-[#C3D4E9] rounded-full px-4">
        <CiSearch className="w-6 h-6 text-[#596780]" />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow px-2 py-1 outline-none text-gray-700"
        />
        <FaSlidersH className="text-gray-500" />
      </div>

      {/* Icons & Authentication */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {[FaHeart, FaBell, FaCog].map((Icon, index) => (
          <div
            key={index}
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-[#C3D4E9] hover:border-blue-500 cursor-pointer relative"
          >
            <Icon className="text-gray-600 w-6 h-6 hover:text-blue-500" />
            {Icon === FaBell && (
              <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            )}
          </div>
        ))}

        {/* Authentication Button */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 flex cursor-pointer items-center justify-center rounded-full border border-[#C3D4E9]">
          <SignedOut>
            <SignInButton>
              <CgProfile className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}