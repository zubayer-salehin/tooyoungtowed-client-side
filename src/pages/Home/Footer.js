import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


// image
import BrandImg from '../../images/brand_img.png';
import Brand_Trade_mark from '../../images/brand_trade-mark.svg';
import Sologan from '../../images/sologan.png';

const Footer = () => {
    return (
        <footer className="bg-[#5C1112] text-white">
            <section className='md:container container tab:mx-auto tab:p-16 flex flex-col tab:flex-row  p-12'>
                {/* first-section */}
                <div className='tab:w-1/2 lg:w-1/4'>
                    <div>
                        <h5 className='mb-4 text-lg italic text-[#C3C3C3]'> Latest Tweet </h5>
                        <p className='w-[75%] lg:w-fit'> Thank you for standing by the girls and women of the world during this devastating time of massive attacks on their… <span className='tab:block lg:inline'> https://t.co/KVrmHez0fd </span> </p>
                        <a href='ston' className='underline underline-offset-2 block mt-4 text-[#C3C3C3]'> @2young2wed </a>
                        <div>
                            <h2 className='text-lg italic font-normal mt-10'> Social Media </h2>
                            <div className='flex gap-[2.20rem]  mt-5 w-[100%] tab:-ml-4 ml-2'>
                                <div className='relative hover:opacity-70 tab:ml-6'>
                                    <FontAwesomeIcon icon={faTwitter} className="text-1xl" />
                                    <span className='absolute rounded-[50%] border-white border-[1px] w-9 h-9 -top-1.5 -left-2.5'></span>
                                </div>
                                <div className='relative hover:opacity-70'>
                                    <FontAwesomeIcon icon={faFacebookF} className="text-1xl" />
                                    <span className='absolute rounded-[50%] border-white border-[1px] w-9 h-9 -top-1.5 -left-3'></span>
                                </div>
                                <div className='relative hover:opacity-70'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-1xl" />
                                    <span className='absolute rounded-[50%] border-white border-[1px] w-9 h-9 -top-1.5 -left-[0.700rem]'></span>
                                </div>
                                <div className='relative hover:opacity-70'>
                                    <FontAwesomeIcon icon={faInstagram} className="text-1xl" />
                                    <span className='absolute rounded-[50%] border-white border-[1px] w-9 h-9 -top-1.5 -left-[0.70rem]'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second-section */}
                <div className='tab:w-1/4  tab:-ml-0 tab:ml-5 px-8 tab:mt-3 -ml-5 mt-24'>
                    <div>
                        <p className='text-[28px] font-bold'>Subscribe to our</p>
                        <p className='text-[28px] font-bold my-[2px] mb-6'>Newsletter!</p>
                        <p className='mt-7 w-10/12 tab:w-auto lg:w-fit'>Want the most up-to-date details on Too Young to Wed programs, news, and exhibitions? Sign up below! </p>
                    </div>
                    <div className='flex flex-col tab:flex-row gap-4  lg:gap-6 mt-16'>
                        <div className='tab:w-1/3'>
                            <p>Email Address*</p>
                            <input type="text" className='tab:w-16 w-full py-1' />
                        </div>
                        <div className='tab:w-1/3'>
                            <p>First Name*</p>
                            <input type="text" className='tab:w-16 w-full py-1' />
                        </div>
                        <div className='tab:w-1/3'>
                            <p>Last Name*</p>
                            <input type="text" className='tab:w-16 w-full py-1' />
                        </div>
                    </div>
                    <button className='bg-[#7acc4d] tab:mt-7 mt-7 py-3 w-[100%] tab:w-[240px]'>Sign me up!</button>
                </div>
                {/* third-section */}
                <div className='tab:ml-44 tab:mt-1 mt-20 '>
                    <div>
                        <img src={Sologan} alt="" className='tab:ml-[8.4rem]' />
                    </div>
                    <div className='tab:text-right text-[#C3C3C3] my-8'>
                        <p>View our Financials</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={BrandImg} alt="" className='w-36' /><img src={Brand_Trade_mark} alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;