import { AiFillHeart } from "react-icons/ai";

import Image from 'next/image'
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Detail = () => {
  return (
    <div className='max-w-[1017px] flex justify-between items-center gap-8'>
        <div className='w-[492px] h-[508px] flex flex-col justify-between items-center'>
        <div className="bg-[#3563E9] w-[492px] h-[360px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
        <div className="flex-1">
          <h1 className="mb-4 font-semibold text-[32px] leading-10 tracking-tight text-left">
          Sports car with the best <br /> design and acceleration
          </h1>
          <p className="mb-4 text-base font-medium tracking-tight">
          Safety and comfort while driving a <br /> 
          futuristic and elegant sports car
          </p>
          
        </div>
        <div className=" bottom-4 left-4">
          <Image
            src="/heroCar2.png"
            alt="Car 2"
            height={480}
            width={540}
            className=" w-[380px] h-[120px] ml-10 object-contain"
          />
        </div>
      </div>
        <div className='flex justify-between gap-6 items-center'>
            <div>
                <Image src="/View-1.png" alt=" view-1" width={50} height={50} className="w-[148px] h-[124px] rounded-[10px]" />
            </div>
            <div>
                <Image src="/View-2.png" alt=" view-2" width={50} height={50} className="w-[148px] h-[124px] rounded-[10px]" />
            </div>
            <div>
                <Image src="/View-3.png" alt=" view-3" width={50} height={50} className="w-[148px] h-[124px] rounded-[10px]" />
            </div>

        </div>

        </div>
        <div className="w-[492px] h-[508px] p-7 bg-white rounded-[10px]  ">
      {/* Title and Favorite Icon */}
      <div className="flex justify-between px-5 items-center">
        <h2 className="text-[32px] font-bold">Nissan GT – R</h2>
        <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
      </div>

      {/* Rating */}
      <div className="flex items-center px-5 gap-[4px]">
              <p className="text-yellow-500 flex items-center gap-[2px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
              </p>
              <p className="text-[#596780] "> 440+ Reviews</p>
            </div>

      {/* Description */}
      <p className="text-[#596780] font-normal p-5 text-xl mt-4">
        NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-y-2 mt-4 gap-8 px-5 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-xl text-[#90A3BF]">Type:</span>
          <span className="ml-2 font-semibold text-xl text-[#596780]">Car</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-xl text-[#90A3BF]">Sport:</span>
          <span className="ml-2  font-semibold text-xl text-[#596780]">Manual</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-xl text-[#90A3BF]">Capacity:</span>
          <span className="ml-2 font-semibold text-xl text-[#596780]">2 Person</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-xl text-[#90A3BF]">Gasoline:</span>
          <span className="ml-2  font-semibold text-xl text-[#596780]">70L</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex px-5 py-6     justify-between mt-6">
        <div className="flex  flex-col">
            <div className="flex items-center"> 
          <span className="text-3xl font-bold text-black">$80.00</span>
          <span className=" text-base font-bold text-[#90A3BF]">/days</span>
          </div>
          <span className="text-[#90A3BF] line-through text-base font-bold  ml-2">$100.00</span>
        </div>
       <Link href="/payment"> <button className="bg-[#3563E9] w-[140px] h-[56px] text-white px-5 py-2 rounded-[4px] font-medium hover:bg-blue-600">
          Rent Now
        </button></Link>
      </div>
    </div>
    </div>
  )
}

export default Detail