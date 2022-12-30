import React from 'react'
import "./blog22To24.css"

const Blog22To24 = () => {
  return (
    <div>
        <div className='mt-28 grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img class="xl:w-1/2 xl:float-right sm:w-full sm:h-96" src="/images/3.jpg" alt="" />
                </div>
                <div className='xl:py-16 xl:pl-12 xl:pr-80 sm:p-12 md:p-12'>
                    <p class="blog-date">July 29, 2019</p>
                    <h5 class="blog-title">HAUWA SPEAKS WITH TV 5 MONDE</h5>
                    <p class="blog-description">
                        Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with TV 5 Monde during her visit to Vancouver, Canada for the Women Deliver conference in...
                        <a href="#">Read more</a>
                    </p>
                </div>
            </div>

            <div className='mt-28 grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img class="xl:w-1/2 xl:float-right sm:w-full sm:h-96" src="/images/2.png" alt="" />
                </div>
                <div className='xl:py-16 xl:pl-12 xl:pr-80'>
                    <p class="blog-date">July 17, 2019</p>
                    <h5 class="blog-title">TRAVELING NATIONAL GEOGRAPHIC WOMEN OF VISION
                    </h5>
                    <p class="blog-description">
                        A selection of TYTW founder Stephanie Sinclair’s child marriage images are on display as part of National Geographic's Women of Vision traveling photo exhibit featured for...
                        <a href="#">Read more</a>
                    </p>
                </div>
            </div>


            <div className='mt-28 grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img class="xl:w-1/2 xl:float-right sm:w-full sm:h-96" src="/images/1.jpg" alt="" />
                </div>
                <div className='xl:py-16 xl:pl-12 xl:pr-80'>
                    <p class="blog-date">July 17, 2019</p>
                    <h5 class="blog-title">TYTW SCHOLARSHIP WINNER SPEAKS WITH VANCOUVER SUN</h5>
                    <p class="blog-description">
                        Hauwa, a survivor of Boko Haram and TYTW Leadership Scholarship Grantee, spoke with the Vancouver Sun during her recent visit to Canada as a speaker at the prestigious...
                        <a href="#">Read more</a>
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Blog22To24