import React from 'react';

const SingleBlog19to21 = (props) => {
    const { date, title, description, img } = props.blog
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-5 text-center lg:text-left mb-[65px]">
            <div className="lg:pl-20 lg:mr-6  mx-auto lg:mx-0">
                <img className="w-[450px] h-[300px]"
                    src={img}
                    alt="" />
            </div>

            <div className="flex items-center">
                <div>
                    <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                        {date}
                    </p>
                    <h1 className="title leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold mb-[27px]">
                        {title}
                    </h1>
                    <p className="pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                        {" "}
                        {description}
                        <span className="text-[#8c0804]">Read more</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog19to21;