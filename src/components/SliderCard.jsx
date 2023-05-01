import React from 'react';

const SliderCard = ({ slider }) => {

    const { img, name } = slider
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default SliderCard;