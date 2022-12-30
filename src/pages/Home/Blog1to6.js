import React from "react";
import blogs from "../../assets/BlogData/BlogData1_6";

function Blog1to6() {

  return (
    <section className="bg-[#efe4ce]">
      <div className="pt-20">
        {blogs &&
          blogs.map((blog) => {
            return (
              <article
                key={blog.id}
                className="grid grid-cols-1 pb-10  lg:grid-cols-2 lg:col-start-2 lg:col-span-4 "
              >
                <div className="lg:pl-28 lg:mr-6">
                  <img
                    className="w-96 h-80 lg:w-auto lg:h-auto"
                    src={blog.img}
                    alt="blogImage"
                  />
                </div>

                <div className="p-10 pt-5 lg:pr-32 content-center ">
                  <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                    {blog.date}
                  </p>
                  <h1 className="title leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold mb-[27px]">
                    {blog.title}
                  </h1>
                  <p className="description pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                    {" "}
                    {blog.description}
                    <span className="text-[#8c0804]">Read more</span>
                  </p>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}

export default Blog1to6;
