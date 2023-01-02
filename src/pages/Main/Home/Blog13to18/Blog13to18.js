import React from "react";
import blogs from "../../../../assets/blogData/BlogData13_18";


function Blog13to18() {

    return (
        <section className="bg-[#efe4ce]">
            <div className="py-20 max-w-7xl mx-auto px-5">
                {blogs &&
                    blogs.map((blog) => {
                        return (
                            <article
                                key={blog.id}
                                className="grid lg:grid-cols-2 grid-cols-1 mt-[65px] lg:px-0 px-5 text-center lg:text-left"
                            >
                                <div className="lg:pl-20 lg:mr-6  mx-auto lg:mx-0">
                                    <img
                                        className="w-[450px] h-[300px]"
                                        src={blog.img}
                                        alt="blogImage" />
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <p className=" mb-[7px] text-[#4a4a4a] text-[16px] italic">
                                            {blog.date}
                                        </p>
                                        <h1 className="title leading-[1.26] lg:text-[35px] text-[30px]  text-[#8c0804] font-extrabold lg:mb-[24px] mb-0">
                                            {blog.title}
                                        </h1>
                                        <p className="description pt-5 text-[18px] text-[#1c1515] leading-[1.61]">
                                            {" "}
                                            {blog.description}
                                            <span className="text-[#8c0804]">Read more</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
            </div>

        </section>
    );
}

export default Blog13to18;