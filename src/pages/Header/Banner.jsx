import React from 'react';
import Slider from '../../components/Slider';
import BArrow from '../../assets/icons/arrow-forward.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <main className='absolute top-[70px] text-white flex h-[80vh] gap-6 items-center'>
            <div className='flex justify-center flex-col md:w-[30%] whitespace-nowrap'>
                <h2 className='text-[75px] font-bold'>Cox's bazar</h2>
                <p>Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                <button className='bg-[#F9A51A] w-[40%]  h-[45px] mt-5 text-black font-semibold   rounded'><Link to="/booking" className='flex items-center justify-center gap-4    '>Booking <span> <img src={BArrow} alt="" /></span></Link></button>
            </div>
            <Slider />
        </main>
    );
};

export default Banner;