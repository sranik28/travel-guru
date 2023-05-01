import React from 'react';
import NavBar from './Header/NavBar';
import banner from "../assets/img/banner.png";

const Booking = () => {
    return (
        <main>
            <section>
                <div className='before:content-[""] h-screen w-full before:bg-[#0000009c] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 '>
                    <img className='h-screen w-full ' src={banner} alt="" />
                </div>
                <NavBar />
            </section>
        </main>
    );
};

export default Booking;