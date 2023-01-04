import React from "react";

const TeamComponent = ({ sections }) => {
  //console.log(sections.sections);
  return (
    <>
      {sections?.map((section, id) => {
        return (
          <div
            key={id}
            className="lg:flex my-auto items-center mb-[48px] lg:mb-[62px] lg:h-[158px] "
          > 
          <div className="text-center ml-[70px] lg:mr-[38px] ">
          <img
              src={section.img}
              className="mb-[30px] w-[150px] lg:w-[100px] lg:max-w-[158px] text-center cursor-pointer "
            />
          </div>
          <div className="text-center lg:text-left mr-5">
          <h1 className="text-[20px] lg:text-[23px] font-extrabold text-[#8c0804] cursor-pointer lg:text-left ">
              {section.name}
            </h1>
            <p className=" leading-[1.5] text-[18px] text-center lg:text-left title ">
              {section.title}
            </p>
            {section.title !== "" && (
              <p className="cursor-pointer text-[#8c0804] leading-[1.5]  text-[18px] lg:text-left">
                Read More
              </p>
            )}
          </div>
           
         
          </div>
        );
      })}
    </>
  );
};

export default TeamComponent;
