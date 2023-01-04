import React from 'react';
import "./Impact.css";
import impact_banner from "../../../assets/images/Impact/impact_banner.jpg"
const Impact = () => {
    return (
       
        <div className="bg-[#efe4ce]">
            {/* start banner  */}
            <div>
                <div className='banner lg:h-[100%] '>
                    <img className='bannerImage' src={impact_banner} alt="" />
                    <h1 className='lg:text-5xl text-4xl font-bold text-center text-white'>OUR IMPACT</h1>
                </div>

                <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />
            </div>
            {/* end banner  */}

            {/* start Girls Article  */}
            <article className='mt-[53px] mb-[40px] lg:px-[104.5px] px-2'>
                <div className='container mx-auto '>
                    <h1 className='text-5xl font-bold text-center mb-[30px] text-[#8c0804]'>OUR GLOBAL IMPACT</h1>
                    <div className='grid place-items-center pb-7 text-center'>
                        <em className='text-[22px] text-[#737373] italic leading-[1.5]'>Above, Anita, 15, during the Tehani Photo Workshop in Samburu County, Kenya</em>
                    </div>
                    <p className='text-[22px] font-normal mb-[30px]'>In just a few years, TYTW has made an indelible impact on the issue of child marriage. Through its effective approach of producing girl-centered visual storytelling to raise awareness and delivering programs including photo workshops and leadership development to help girls reclaim their narratives, we have successfully turned up the spotlight on this critical humanitarian issue while simultaneously empowering survivors and their communities.</p>
                    <p className='text-[22px] font-normal mb-[30px]'>At the global level, TYTW has educated billions about the consequences of child marriage by securing world class media coverage. Through our media reach and exhibition partnerships with the UNFPA and Canadian Government, more than 9.7 million individuals have been educated about the child marriage crisis in Nepal alone. Photographs made by child marriage survivors during a workshop in Kenya earned more than six billion views globally as a result of their publication in top tier media outlets including Yahoo, The New York Times, CNN, Refinery 29, Glamour, and National Geographic.</p>
                      <div className='styled-qoute grid place-items-center text-center mb-8'>
                           <h1>
                           "Before this workshop, I
                           <br></br> was afraid to talk in 
                           <br></br>front of people and to <br></br> share my story. But now, I <br></br> have that courage to lead <br></br> people."
                           </h1>
                      </div>
                      <div className='grid place-items-center pb-7 text-center '>
                        <em className='text-[22px] text-[#5c1112] italic leading-[1.5]'>Jane, 15, Tehani Workshop Participant, Samburu County, Kenya</em>
                    </div>
                    
                   </div>

            </article>
            <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />
            {/* end Girls Article  */}

            {/* parallax start  */}
            <article className='parallax'>
                <div className='parallax-container'>

                </div>
            </article>
            {/* parallax end  */}
            <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />

            {/* Start RESILIENT GIRLS  */}
            <article>
                <div>
                    <div className='flex justify-center my-[40px]'>
                        <img src="https://tooyoungtowed.org/assets/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363.png" alt="" />
                    </div>
                    <div className='grid place-items-center pb-7 text-center'>
                        <em className='text-[22px] text-[#737373] italic leading-[1.5]'>Above, Nujoud Ali in Sana'a, Yemen. She was married to her husband, more than 20 years her senior when she was only eight years old. They are now divorced. Nujoud's story caused parliament to consider a bill writing a minimum marriage age into law.</em>
                    </div>
                    <div className='container mx-auto lg:px-[104.5px] px-2'>
                        <p className='text-[22px] font-normal mb-[30px]'>In a media trend analysis report commissioned by the Kendeda Fund, among the NGO community, “Too Young To Wed continued to be one of the smallest groups with the largest reach through coverage of their local skills-building trainings and partnerships with the New York Times, BBC, National Geographic and other major media.” At the individual level, our programs impact 600 girls directly but reach far beyond that number. Statistics show that each girl that recovers or is prevented from child marriage will then prevent her own children from marrying early – a ripple effect that continues well beyond this generation. Further, participation in our programs empowers girls and helps lift their voices, which directly facilitates social norm change.

                        </p>
                        <p className='text-[22px] font-normal '>At the individual level, our programs impact 600 girls directly but reach far beyond that number. Statistics show that each girl that recovers or is prevented from child marriage will then prevent her own children from marrying early – a ripple effect that continues well beyond this generation. Further, participation in our programs empowers girls and helps lift their voices, which directly facilitates social norm change.

</p>
                    </div>
                </div>
            </article>
            {/* End RESILIENT GIRLS  */}



            {/* Start Programming article  */}
            <article>
                <div className='container mx-auto lg:px-[104.5px] px-2'>
                    
                    <div className='flex justify-center py-[40px]'>
                        <img src="http://www.tooyoungtowed.org/uploads/214.jpg" alt="" />
                    </div>
                </div>
            </article>
            {/* End Programming article  */}
            <div className='flex justify-center py-[40px]'>
                        <img src="https://tooyoungtowed.org/assets/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363.png" alt="" />
                    </div>
        </div>
    );
};

export default Impact;