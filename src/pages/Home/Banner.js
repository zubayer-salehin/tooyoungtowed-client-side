import React from 'react';
import bannerImage from "../../images/bannerImage.jpg"
import flowerImage from "../../images/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png"

const Banner = () => {
    return (
        <div className='relative'>
            <img className='bannerImage' src={bannerImage} alt="" />
            <h3 className='absolute top-[36%] left-[16%] text-5xl font-bold text-white'>LATEST NEWS Zubayer Salehin</h3>
            <img className='w-[100%] h-[33.7px]' src={flowerImage} alt="" />
        </div>
    );
};

export default Banner;