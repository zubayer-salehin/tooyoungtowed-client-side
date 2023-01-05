import React from "react";
import blogs from "../../../../assets/BlogData/BlogData1_6";

function Blog1to6() {
  return (
    <div className="bg-[#f0e4cf]">
      <div className="lg:max-w-[1075px] w-full mx-auto ">
        {blogs.map(({ id, date, title, description, img }) => (
          <div key={id} className="lg:flex block gap-16 pt-[64px] pb-[54px]">
            <div className="lg:w-2/5 w-full">
              <img className="w-full" src={img} alt={title} />
            </div>
            <div className="lg:w-3/5 w-full pt-[43px] p-5">
              <div className="text-[#4a4a4a] italic mb-[7px]">{date}</div>
              <h1 className="lg:text-[35px] text-[30px] text-[#8c0804] font-bold leading-[1.26] mb-[27px] cursor-pointer">
                {title}
              </h1>
              <p className="text-[18px] leading-[1.61]">
                {description}{" "}
                <span className="text-[#8c0804] cursor-pointer">Read More</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog1to6;
