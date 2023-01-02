import React, { useState } from 'react';
import Blog22To24 from "./Blog22To24";
import BlogPart7to12 from "./BlogPart7to12";
import Navbar from "./Navbar/Navbar";
import Blog13to18 from './Blog13to18';
import Blog19to21 from './Blog19to21';
import Login from '../Login&Signup/Login';
import SignUp from '../Login&Signup/SignUp';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Blog1to6 from "./Blog1to6";


const Home = () => {

    const [singUpModal, setSignUpModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const loginProps = { loginModal, setLoginModal, setSignUpModal }
    const signUpProps = { singUpModal, setSignUpModal, setLoginModal }

    return (
        <div>
            <Navbar setLoginModal={setLoginModal} />
            <Banner />
            <Login loginProps={loginProps} />
            <SignUp signUpProps={signUpProps} />
            <Blog1to6 />
            <BlogPart7to12 />
            <Blog13to18 />
            <Blog19to21 />
            <Blog22To24 />
            <Footer />
        </div>
    );
};

export default Home;
