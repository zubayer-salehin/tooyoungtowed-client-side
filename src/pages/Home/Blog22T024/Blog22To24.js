import React from 'react'
import blog22 from "./blog22.jpg"
import blog23 from "./blog23.jpg"
import blog24 from "./blog24.jpg"
import "./blog22To24.css"

const Blog22To24 = () => {
    return (
        <div className="bg-[#efe4ce]">
            <div className='py-20 max-w-7xl mx-auto px-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                    <div className='lg:pl-20 lg:mr-6  mx-auto lg:mx-0'>
                        <img class="w-[450px] h-[300px]" src={blog22} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                                July 29, 2019
                            </p>
                            <h1 className="leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold lg:mb-[24px] mb-0">
                                HAUWA SPEAKS WITH TV 5 MONDE
                            </h1>
                            <p className="description pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                                {" "}
                                Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with TV 5 Monde during her visit to Vancouver, Canada for the Women Deliver conference in...
                                <span className="text-[#8c0804]">Read more</span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                    <div className='lg:pl-20 lg:mr-6  mx-auto lg:mx-0'>
                        <img class="w-[450px] h-[300px]" src={blog23} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                                July 17, 2019
                            </p>
                            <h1 className="leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold lg:mb-[24px] mb-0">
                                TRAVELING NATIONAL GEOGRAPHIC WOMEN OF VISION
                            </h1>
                            <p className="description pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                                A selection of TYTW founder Stephanie Sinclair’s child marriage images are on display as part of National Geographic's Women of Vision traveling photo exhibit featured for...
                                <span className="text-[#8c0804]">Read more</span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                    <div className='lg:pl-20 lg:mr-6  mx-auto lg:mx-0'>
                        <img class="w-[450px] h-[300px]" src={blog24} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                                July 17, 2019
                            </p>
                            <h1 className="leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold lg:mb-[24px] mb-0">
                                TYTW SCHOLARSHIP WINNER SPEAKS WITH VANCOUVER SUN
                            </h1>
                            <p className="pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                                Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with the Vancouver Sun during her recent visit to Canada as a speaker at the prestigious...
                                <span className="text-[#8c0804]">Read more</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog22To24