import React from 'react'
import blog22 from "./blog22.jpg"
import blog23 from "./blog23.jpg"
import blog24 from "./blog24.jpg"
import "./blog22To24.css"
const Blog22To24 = () => {
    return (
        <div className="bg-[#efe4ce]">
            <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                <div className='lg:pl-28 lg:mr-6'>
                    <img class="xl:w-11/12 xl:float-right sm:w-full" src={blog22} alt="" />
                </div>
                <div className='flex items-center lg:pl-12 lg:pr-40 lg:py-0 sm:py-6 sm:px-12  lg:text-left sm:text-center'>
                    <div>
                    <p class="blog-date">July 29, 2019</p>
                    <h5 class="blog-title">HAUWA SPEAKS WITH TV 5 MONDE</h5>
                    <p class="blog-description">
                        Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with TV 5 Monde during her visit to Vancouver, Canada for the Women Deliver conference in...
                        <a href="#">Read more</a>
                    </p>
                    </div>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                <div className='lg:pl-28 lg:mr-6'>
                    <img class="xl:w-11/12 xl:float-right sm:w-full" src={blog23} alt="" />
                </div>
                <div className='flex items-center lg:pl-12 lg:pr-40 lg:py-0 sm:py-6 sm:px-12  lg:text-left sm:text-center'>
                    <div>
                    <p class="blog-date">July 17, 2019</p>
                    <h5 class="blog-title">TRAVELING NATIONAL GEOGRAPHIC WOMEN OF VISION</h5>
                    <p class="blog-description">
                        A selection of TYTW founder Stephanie Sinclair’s child marriage images are on display as part of National Geographic's Women of Vision traveling photo exhibit featured for...
                        <a href="#">Read more</a>
                    </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 pb-14'>
                <div className='lg:pl-28 lg:mr-6'>
                    <img class="xl:w-11/12 xl:float-right sm:w-full" src={blog24} alt="" />
                </div>
                <div className='flex items-center lg:pl-12 lg:pr-40 lg:py-0 sm:py-6 sm:px-12  lg:text-left sm:text-center'>
                    <div>
                    <p class="blog-date">July 17, 2019</p>
                    <h5 class="blog-title">TYTW SCHOLARSHIP WINNER SPEAKS WITH VANCOUVER SUN</h5>
                    <p class="blog-description">
                        Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with the Vancouver Sun during her recent visit to Canada as a speaker at the prestigious...
                        <a href="#">Read more</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog22To24