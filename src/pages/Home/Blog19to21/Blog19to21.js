import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleBlog19to21 from './SingleBlog19to21';


const Blog19to21 = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-[#efe4ce]">
            <div className="py-2 max-w-7xl mx-auto px-5">
                {
                    blogs.map(blog => <SingleBlog19to21
                        key={blog.id}
                        blog={blog}
                    ></SingleBlog19to21>)
                }
            </div>
        </div>
    );
};

export default Blog19to21;