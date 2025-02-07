// "use client";

// import { FaHeart, FaRegHeart, FaCar, FaUser, FaGasPump } from "react-icons/fa";
// import { useState } from "react";
// import PickDrop from "./PickDrop";
// import Link from "next/link";
// import Image from "next/image";

// interface Car {
//   name: string;
//   type: string;
//   image: string;
//   fuel: string;
//   transmission: string;
//   capacity: string;
//   price: string;
//   oldPrice?: string;
//   favorite: boolean;
// }

// const cars: Car[] = [
//     {
//         name: "All New Rush",
//         type: "SUV",
//         image: "/recom-1.png",
//         fuel: "70L",
//         transmission: "Manual",
//         capacity: "6 People",
//         price: "$72.00",
//         oldPrice: "$80.00",
//         favorite: false,
//       },
//       {
//         name: "CR  - V",
//         type: "SUV",
//         image: "/recom-2.png",
//         fuel: "80L",
//         transmission: "Manual",
//         capacity: "6 People",
//         price: "$80.00",
//         favorite: true,
//       },
//       {
//         name: "All New Terios",
//         type: "SUV",
//         image: "/recom-3.png",
//         fuel: "90L",
//         transmission: "Manual",
//         capacity: "6 People",
//         price: "$74.00",
//         favorite: true,
//       },
//       {
//         name: "CR - V",
//         type: "SUV",
//         image: "/recom-4.png",
//         fuel: "80L",
//         transmission: "Manual",
//         capacity: "6 People",
//         price: "$80.00",
//         favorite: true,
//       },
//       {
//         name: "MG ZX Exclusice",
//         type: "Hatchback",
//         image: "/recom-5.png",
//         fuel: "70L",
//         transmission: "Manual",
//         capacity: "4 People",
//         price: "$76.00",
//         oldPrice: "$80.00",
//         favorite: true,
//       },
//       {
//         name: "New MG ZS",
//         type: "SUV",
//         image: "/recom-6.png",
//         fuel: "80L",
//         transmission: "Manual",
//         capacity: "6 People",
//         price: "$80.00",
//         favorite: false,
//       },
//   // Add other car objects here
// ];

// const Cat_Recomendation = () => {
//   const [favorites, setFavorites] = useState<{ [key: string]: boolean }>(
//     cars.reduce((acc, car) => ({ ...acc, [car.name]: car.favorite }), {})
//   );

//   const toggleFavorite = (carName: string) => {
//     setFavorites((prev) => ({
//       ...prev,
//       [carName]: !prev[carName],
//     }));
//   };

//   return (
//     <div className="max-w-[1015px] mx-auto p">
//       <div className="text-center mb-6">
//         <PickDrop />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cars.map((car) => (
//          <div
//          key={car.name}
//          className="bg-white shadow-lg rounded-lg p-4 relative"  
//        >
//          {/* Favorite Button */}
//          <button
//            onClick={() => toggleFavorite(car.name)}
//            aria-label={`Mark ${car.name} as favorite`}
//            className="absolute top-3 right-3 text-red-500"
//          >
//            {favorites[car.name] ? <FaHeart /> : <FaRegHeart />}
//          </button>
//          {/* Car Name and Type */}
//          <div className="mb-4">
//            <h3 className="text-lg font-medium">{car.name}</h3>
//            <p className="text-gray-500 text-sm">{car.type}</p>
//          </div>
//          {/* Car Image */}
//          <Image
//            alt={`${car.name} car`}
//            src={car.image}
//            height={200}
//            width={200}
//            className="w-full h-36 object-contain mb-4"
//          />
//          {/* Car Details */}
//          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
//            <div className="flex items-center gap-2">
//              <FaGasPump />
//              <span>{car.fuel}</span>
//            </div>
//            <div className="flex items-center gap-2">
//              <FaCar />
//              <span>{car.transmission}</span>
//            </div>
//            <div  className="flex items-center gap-2">
//              <FaUser />
//              <span>{car.capacity}</span>
//            </div>
//          </div>
//          {/* Pricing and Rent Button */}
//          <div className="flex justify-between items-center">
//            <div>
//              <p className="text-lg font-bold">{car.price}/day</p>
//              {car.oldPrice && (
//                <p className="text-gray-400 line-through">{car.oldPrice}</p>
//              )}
//            </div>
//            <Link href="/detailCar"><button className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium">
//              Rent Now
//            </button></Link>
//          </div>
//        </div>
       
//         ))}
//       </div>
//       {/* Show More Cars Section */}
      // <div className="flex justify-between  items-center mt-6">
      //  <button className="bg-blue-500 text-white px-6 py-2 rounded items-center text-sm font-medium">
      //     Show More Cars
      //   </button> 
      //   <p className="text-gray-500 text-sm">120 Cars</p>
      // </div>
//     </div>
//   );
// };

// export default Cat_Recomendation;











"use client"
import { useEffect, useState } from "react";
import { getCars } from "../../sanity/lib/fetch";
import { Heart, Fuel, Settings, Users,  } from "lucide-react";
import Link from "next/link";
import PickDrop from "./PickDrop";
import Image from "next/image";

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
}

export default function Cat_Recomendation() {
  const [cars, setCars] = useState<Car[]>([]);
  

  useEffect(() => {
    async function fetchData() {
      const data = await getCars();
      setCars(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        <PickDrop />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <Heart className="w-6 h-6" />
            </button>
            <div className="w-full flex justify-center">
              <Image
                src={car.imageUrl}
                alt={car.name}
                className="w-11/12 h-56 object-contain"
                width={200}
                height={200}
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold absolute top-4">{car.name}</h2>
              <p className="text-gray-500 text-sm absolute top-10">{car.brand}  {car.type}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1"><Fuel className="w-4 h-4" /> {car.fuelCapacity}</span>
                <span className="flex items-center gap-1"><Settings className="w-4 h-4" /> {car.transmission}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {car.seatingCapacity}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-xl font-bold">{car.pricePerDay}</span>
                  {car.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">{car.originalPrice}</span>
                  )}
                  <span className="text-gray-500 text-sm"></span>
                </div>
                <Link href={`/car/${car._id}`}>
  <button className="bg-[#3563E9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
    Rent Now
  </button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between  items-center mt-6">
        <Link href="/category">
       <button className="bg-blue-500 text-white px-6 py-2 rounded items-center text-sm font-medium">
          Show More Cars
        </button> 
        </Link>
        <p className="text-gray-500 text-sm">120 Cars</p>
      </div>
    </div>
  );
}


