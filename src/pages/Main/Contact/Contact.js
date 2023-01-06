import React from 'react';
import bannerImage from "../../../assets/images/Contact/583.jpg"
import flowerImage from "../../../assets/images/Banner/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png"
import waterLilies from "../../../assets/images/UsGirlsChoice/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363 (1).png"

const Contact = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-[50vh] sm:w-[100vw] sm:h-[122vh] object-cover' src={bannerImage} alt="" />
                <h3 className='usGirlsChoiceText absolute top-[42%] left-[18%] text-5xl font-bold text-white'>CONTACT</h3>
                <img className='w-[100%] h-[33.7px]' src={flowerImage} alt="" />
            </div>
            <div className='my-14'>
                <h2 className='text-[35px] sm:text-[42px] font-bold text-[#8c0804] text-center mb-11'>CONTACT US</h2>
                <div className='text-center text-xl mb-10 font-medium'>
                    <p>Too Young to Wed</p>
                    <p>1112 Main Street, First Floor</p>
                    <p>Peekskill, NY 10566</p>
                </div>
                <p className='text-xl text-center font-medium mb-16'>Please direct any questions to our email at info@tooyoungtowed.org</p>
                <div className='flex justify-center'>
                    <img src={waterLilies} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;