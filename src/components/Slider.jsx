import React from 'react';
import img1 from '../assets/img/Sajek.png'
import img2 from '../assets/img/Sreemongol.png'
import img3 from '../assets/img/sundorbon.png'
import img4 from '../assets/img/Sajek.png'
import left from '../assets/icons/left.png'
import right from '../assets/icons/right.png'
import SliderCard from './SliderCard';

const Slider = () => {

    const sliderData = [
        {
            img: img1,
            name: 'Sajek'
        },
        {
            img: img2,
            name: 'Sreemongol'
        },
        {
            img: img3,
            name: 'sundorbon'
        },
        {
            img: img4,
            name: 'Sajek'
        }
    ]

    return (
        <section>
            <div className='flex gap-5'>
                {
                    sliderData.map((slider, i) => <SliderCard key={i} slider={slider} />)
                }
            </div>
            <div className='flex gap-2 mt-3'>
                <img src={right} alt="" />
                <img src={left} alt="" />
            </div>
        </section>
    );
};

export default Slider;