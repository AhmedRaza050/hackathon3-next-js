import React from 'react'
import HeroSection from './components/Hero';
import PickDrop from './components/PickDrop';
import PopularCar from './components/PopularCar';
import Recomendation from './components/Recommendation';

const Home = () => {
  return (
    <div className='max-w-[1440px] max-h-[2120px] bg-[#F6F7F9] top-[124px]'>
       <HeroSection />
       <PickDrop />
       <PopularCar />
       <Recomendation />

    </div>
  )
}

export default Home;