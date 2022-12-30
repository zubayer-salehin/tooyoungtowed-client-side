import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleBlog5 from './SingleBlog19_21';


const Blog19to21 = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="bg-[#efe4ce]">
                {
                    blogs.map(blog => <SingleBlog5
                        key={blog.id}
                        blog={blog}
                    ></SingleBlog5>)
                }
            </div>
        </div>
    );
};

export default Blog19to21;