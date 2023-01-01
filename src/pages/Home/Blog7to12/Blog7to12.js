import React from "react";
import blogImg10 from "../../../assets/images/Blog7to12/blogImg10.jpg";
import blogImg11 from "../../../assets/images/Blog7to12/blogImg11.png";
import blogImg12 from "../../../assets/images/Blog7to12/blogImg12.jpg";
import blogImg7 from "../../../assets/images/Blog7to12/blogImg7.jpg";
import blogImg8 from "../../../assets/images/Blog7to12/blogImg8.jpg";
import blogImg9 from "../../../assets/images/Blog7to12/blogImg9.jpg";

const BlogPart7to12 = () => {
  const contents = [
    {
      _id: 7,
      title: "AFGHANISTAN EMERGENCY INITIATIVE FEATURED IN LOHUD",
      img: blogImg7,
      date: "September 01, 2021",
      description:
        "Click here to read the whole feature on Loud.com. Stephanie Sinclair believes Afghanistan's girls and women deserve to keep their rights and pursue their dreams.Inspired by...",
    },
    {
      _id: 8,
      title: "TOO YOUNG TO WED FEATURED FOR AFGHANISTAN WORK ",
      img: blogImg8,
      date: "August 29, 2021",
      description:
        "Click to read the New York Times feature of our work evacuating vulnerable women from Kabul. Two nonprofit organizations that have been trying, with disappointing results,...",
    },
    {
      _id: 9,
      title: "TYTW INAUGURAL EMERGING PHOTOGRAPHERS FELLOWSHIP",
      img: blogImg9,
      date: "February 08, 2021",
      description:
        "Click to see our grantee Somaya Abdelrahman’s notable work on the effects of female genital mutilation featured in the Washington Post.(Photo by Somaya Abdelrahman) We are...",
    },
    {
      _id: 10,
      title: "MOST COMPELLING IMAGES OF THE 21ST CENTURY",
      img: blogImg10,
      date: "December 16, 2020",
      description:
        "TYTW Founder Stephanie Sinclair image of child brides Tehani and her former classmate Ghada in Hajjah, Yemen, was selected as one of National Geographic's most compelling... ",
    },
    {
      _id: 11,
      title: "CHILD, BRIDE, MOTHER: KENYA",
      img: blogImg11,
      date: "December 10, 2020",
      description:
        "We are excited to share our latest piece published with The New York Times, Child, Bride Mother: Kenya. The piece is accessible today in digital format, and will run in...",
    },
    {
      _id: 12,
      title: "HOLIDAY PRINT SALE!",
      img: blogImg12,
      date: "December 01, 2020",
      description:
        "Starting today, Giving Tuesday, our Holiday Print Sale is LIVE! Choose from SIX stunning 10x15 photographic prints by internationally-acclaimed female image makers from... ",
    },
  ];
  return (
    <div className="bg-[#f0e4cf]">
      <div className="lg:max-w-[1075px] w-full mx-auto ">
        {contents.map(({ img, title, description, date, _id }) => (
          <div key={_id} className="lg:flex block gap-16 pt-[64px] pb-[54px]">
            <div className="lg:w-2/5 w-full">
              <img className="lg:max-w-[450px] w-full" src={img} alt="" />
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
};

export default BlogPart7to12;
