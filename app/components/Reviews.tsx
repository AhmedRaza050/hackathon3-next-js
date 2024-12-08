import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="w-[1016px] h-[452px] py-10 px-10 bg-white rounded-lg">
      {/* Reviews Header */}
      <div className="flex justify-between  w-[136px] h-[28px] items-center mb-6">
        <h2 className="text-xl font-bold">Reviews</h2>
        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">13</span>
      </div>

      {/* Review List */}
      <div className="space-y-8 ">
        {/* Review 1 */}
        <div className="flex items-start">
          <Image
            src="/review1.png"
            alt="Alex Stanton"
            height={200}
            width={200}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-base tricking-tight font-bold">Alex Stanton</h3>
                <p  className="text-sm font-medium text-[#90A3BF]">CEO at Bukalapak</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">21 July 2022</p>
                <div className="flex text-[#FBAD39] mt-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <p className="text-[#596780] text-sm font-normal mt-4 ">
              We are very happy with the service from the MORENT App. Morent has a low price and
              also a large variety of cars with good and comfortable facilities. In addition, the
              service provided by the officers is also very friendly and very polite.
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex items-start">
          <Image
            src="/review2.png"
            alt="Skylar Dias"
            height={200}
            width={200}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base tricking-tight font-bold">Skylar Dias</h3>
                <p className="text-sm font-medium text-[#90A3BF]">CEO at Amazon</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#90A3BF]">20 July 2022</p>
                <div className="flex text-[#FBAD39] mt-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <p className="text-[#596780] text-sm font-normal mt-4">
              We are greatly helped by the services of the MORENT Application. Morent has low
              prices and also a wide variety of cars with good and comfortable facilities. In
              addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>
        </div>
      </div>

      {/* Show All Button */}
      <div className="text-center flex flex-col mt-12">
        <button className="text-[#90A3BF] flex items-center px-5 justify-center gap-1 text-base font-semibold ">
          Show All <FaChevronDown  className="text-[#90A3BF]"/>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
