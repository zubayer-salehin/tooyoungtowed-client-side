import React from 'react';
import './StephaniFreid.css'

const StephaniFreid = () => {
    return (
        <div className="bg-[#efe4ce]">
            {/* start banner  */}
            <div>
                <div className='banners'>
                    <img className='bannerImage' id='ban' src="https://i.ibb.co/vQCSbgK/stephanie-header.jpg" alt="" />
                    <h1 className='lg:text-4xl text-4xl font-bold lg:text-justify text-start mt-[70px] text-white '>STEPHANIE FREID-PERENCHIO <br /> SCHOLARSHIP FUND</h1>
                </div>

                <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />
            </div>
            {/* end banner  */}

            {/* start Girls Article  */}
            <article className='lg:mt-[53px] mt-[40px] mb-[40px] lg:px-[104.5px] px-5 lg:text-justify'>
                <div className='container mx-auto '>
                    <h1 className='lg:text-2xl font-bold mb-[30px]'>Too Young to Wed (TYTW) is delighted to announce initial plans for the launch of the Stephanie Freid-Perenchio Scholarship Fund.</h1>
                    <p className='text-[22px] font-normal mb-[30px]'>It has been a privilege for TYTW to partner over the years with Perenchio, who has become a pillar of the TYTW community. Perenchio's service as Advisory Board member with TYTW, her generous philanthropic investment in empowering girls and ending child marriage globally, and her own remarkable career as a photographer and human rights advocate, are deeply inspiring. In tribute to Perenchio's transformative impact on the girls TYTW serves, we are pleased to honor her by establishing a scholarship fund in her name.</p>
                    <p className='text-[22px] font-normal mb-[30px]'>The Stephanie Freid-Perenchio Scholarship Fund helps TYTW meet rising demand for our scholarships, especially in meeting the objective of providing long-term schooling assistance for some of the most profoundly traumatized survivors served by TYTW. Education access is the single-most effective, evidence-based intervention in preventing child marriage. Globally, the increase in education disruptions due to COVID-19 has been most devastating for underprivileged girls, with rising pressure on them to contribute to household incomes. It also halted access to social services and other protective institutional measures. Tens of millions of girls may never return to school due to the pandemic, and are consequently more vulnerable to child marriage, early pregnancy, and domestic violence. The expansion of TYTW’s scholarship assistance programming through the Stephanie Freid-Perenchio Scholarship Fund helps to mitigate the gendered impacts of the pandemic in this urgent time.</p>
                    <p className='text-[22px] font-normal mb-[30px]'>On behalf of the outstanding girls TYTW is privileged to serve, we celebrate the contributions of Perenchio in making so many empowering resources possible, and are thrilled to launch her eponymous scholarship fund that will create pathways for more girls to thrive.</p>
                </div>

            </article>
            <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />
            {/* end Girls Article  */}

            {/* parallax start  */}
            <article className='parallaxs'>
                <div className='parallaxs-container'>

                </div>
            </article>
            {/* parallax end  */}
            <img className='w-full' src="https://tooyoungtowed.org/assets/redpattern-border_distressed_bottom-b2bf99437a80fd84fcd6eedc5ea5b9b8e0d42e77a4cfe9de4504e94e8d6e8374.png" alt="" />

            {/* Start RESILIENT GIRLS  */}
            <article className='px-5 lg:text-justify'>
                <div>
                    <div className='flex justify-center my-[40px]'>
                        <img src="https://tooyoungtowed.org/assets/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363.png" alt="" />
                    </div>
                    <div className='container mx-auto lg:px-[104.5px] px-2'>
                        <p className='text-[22px] font-normal mb-[30px]'> <span className='font-bold'>Keeping girls in school, and out of child marriage, helps protect girls from violence.</span> When a girl is forced into marriage, she is robbed of her bodily autonomy, her opportunity to complete her education, and her physical and emotional wellbeing. She is subjected to early, forced, and frequent sexual relations, regardless of her own physical limitations, and more prone to serious health complications and injuries. When a girl is in school, she benefits from additional institutional protective measures, access to resources, and supervision of caring adults.</p>

                        <p className='text-[22px] font-normal mb-[30px]'> <span className='font-bold'> Keeping girls in school, and out of child marriage, reduces infant and maternal mortality rates.</span> Child mothers under age 15 are five times more likely to die in childbirth than women in their twenties. Infants born to child mothers are at higher risk for health complications.</p>

                        <p className='text-[22px] font-normal'><span className='font-bold'>Keeping girls in school, and out of child marriage, helps position families for greater economic security.</span> Girls who stay in school are better equipped to help support their families in later years.</p>
                        <p className='text-[22px] font-normal mb-[30px]'><span className='font-bold'>Keeping girls in school, and out of child marriage, helps support the planet.</span> Educated girls are more likely to make more environmentally-conscious choices, helping to reduce the effects of climate change.</p>

                        <p className='text-[22px] font-normal mb-[30px]'>You're also driving generational change -- as each girl who evades child marriage is more likely to prevent her own children from marrying early.</p>
                        <span className='font-bold'></span>
                        <p className='text-[22px] font-bold mb-[30px]'>To donate, visit TYTW's <a href="d">Give Today page</a> and under the “Designation” drop-down menu, select “Stephanie Freid-Perenchio Scholarship Fund.”</p>
                        <div className='flex justify-center py-[40px]'>
                            <img src="https://tooyoungtowed.org/assets/lotus-gradient-5f6dd739c2805bfaaad2b11d1a5dc9f8cd1b120ae0bc16aba019f9ba6db2f363.png" alt="" />
                        </div>
                    </div>
                </div>
            </article>
            {/* End RESILIENT GIRLS  */}
        </div>
    );
};

export default StephaniFreid;