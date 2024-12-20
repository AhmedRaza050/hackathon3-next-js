// import React from 'react'
// import SlideBar from '../components/Slidebar'
// import Detail from '../components/Detail'
// import Reviews from '../components/Reviews'

// import RecentCar from '../components/RecentCar'
// import RecentRecomend from '../components/RecentRecomend'

// const DetailCarRent = () => {
//   return (
//     <div className =" max-w-[1440px]  bg-[#F9F9F9] flex gap-8 justify-evenly ">
//       <div className='max-w-[360px] max-h-[1600px] '>
//         <SlideBar />
//       </div>
//       <div className='max-w-[1015px] py-10'>
//         < Detail/>
//         <div className='py-10'>
       
//           <Reviews />
//         </div>
//         <div >
       
//           <RecentCar />
//           <RecentRecomend />
//         </div>
        
//       </div>
    
//     </div>
//   )
// }

// export default DetailCarRent



import RecentCar from '@/app/components/RecentCar'
import RecentRecomend from '@/app/components/RecentRecomend'
import Reviews from '@/app/components/Reviews';
import SlideBar from '@/app/components/Slidebar';
import React from 'react';
import Detail from '../components/Detail'; 

const DetailCarRent = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4">
      {/* Sidebar */}
      <aside className="sm:w-1/4 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-4"></h2>
        <SlideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-10 bg-[#F6F7F9]">
        {/* Car Details Section */}
        <section>
          <Detail />
        </section>

        {/* Reviews Section */}
        <section className="p-6 ">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <Reviews />
        </section>

        {/* Carousel Section */}
        <section>
          <RecentCar />
          <RecentRecomend />
        </section>
      </main>
    </div>
  );
};

export default DetailCarRent;
