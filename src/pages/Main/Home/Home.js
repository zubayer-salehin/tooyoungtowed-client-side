import React from 'react';
import Blog22To24 from "./Blog22T024/Blog22To24";
import BlogPart7to12 from "./Blog7to12/Blog7to12";
import Blog13to18 from './Blog13to18/Blog13to18';
import Banner from './Banner/Banner';
import Blog1to6 from "../Home/Blog1to6/Blog1to6";
import Blog19to21 from "../Home/Blog19to21/Blog19to21";


const Home = () => {

    return (
        <div>
            <Banner />
            <Blog1to6 />
            <BlogPart7to12 />
            <Blog13to18 />
            <Blog19to21 />
            <Blog22To24 />
        </div>
    );
};

export default Home;
