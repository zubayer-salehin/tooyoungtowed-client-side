import React from 'react';
import SingleBlog19to21 from './SingleBlog19to21';
import blogData from "../../../../assets/BlogData/BlogData19_21";


const Blog19to21 = () => {
  return (
    <div className="bg-[#efe4ce]">
      <div className="py-2 max-w-7xl mx-auto px-5">
        {blogData.map((blog) => (
          <SingleBlog19to21 key={blog.id} blog={blog}></SingleBlog19to21>
        ))}
      </div>
    </div>
  );
};

export default Blog19to21;
