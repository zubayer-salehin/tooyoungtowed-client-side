import React from 'react';

const SingleBlog19_21 = (props) => {
    const { date, title, description, img } = props.blog
    return (
        <div className="grid grid-cols-1 pb-10  lg:grid-cols-2 lg:col-start-2 lg:col-span-4 pt-20">
            <div className="lg:pl-28 lg:mr-6">
                <img className="w-96 h-80 lg:w-auto lg:h-auto"
                    src={img}
                    alt="" />
            </div>

            <div className="p-10 pt-5 lg:pr-32 content-center ">
                <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                    {date}
                </p>
                <h1 className="title leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold mb-[27px]">
                    {title}
                </h1>
                <p className="description pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                    {" "}
                    {description}
                    <span className="text-[#8c0804]">Read more</span>
                </p>
            </div>
        </div>
    );
};

export default SingleBlog19_21;