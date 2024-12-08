import React from 'react'
import SlideBar from '../components/Slidebar'
import Detail from '../components/Detail'
import Reviews from '../components/Reviews'

import RecentCar from '../components/RecentCar'
import RecentRecomend from '../components/RecentRecomend'

const DetailCarRent = () => {
  return (
    <div className =" max-w-[1440px]  bg-[#F9F9F9] flex gap-8 justify-evenly ">
      <div className='max-w-[360px] max-h-[1600px] '>
        <SlideBar />
      </div>
      <div className='max-w-[1015px] py-10'>
        < Detail/>
        <div className='py-10'>
       
          <Reviews />
        </div>
        <div >
       
          <RecentCar />
          <RecentRecomend />
        </div>
        
      </div>
    
    </div>
  )
}

export default DetailCarRent