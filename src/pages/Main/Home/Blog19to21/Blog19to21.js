import React from 'react';
import SingleBlog19to21 from './SingleBlog19to21';
import blogData from "../../../../assets/BlogData/BlogData19_21";


const Blog19to21 = () => {

    return (
        <div className="bg-[#efe4ce]">
            <div className="px-5 py-2 mx-auto max-w-7xl">
                {
                    blogData.map(blog => <SingleBlog19to21
                        key={blog.id}
                        blog={blog}
                    ></SingleBlog19to21>)
                }
            </div>
        </div>
    );
};

export default Blog19to21;