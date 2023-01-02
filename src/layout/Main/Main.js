import React, { createContext, useState } from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';
import SignUp from '../../pages/Main/Login&Signup/SignUp';
import Login from '../../pages/Main/Login&Signup/Login';

export const CONTEXT_LOGIN_REGISTER = createContext();

const Main = () => {

    const [singUpModal, setSignUpModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const values = { singUpModal, setSignUpModal, loginModal, setLoginModal }

    return (
        <CONTEXT_LOGIN_REGISTER.Provider value={values}>
            <Navbar />
            <Outlet />
            <Footer />
            <Login />
            <SignUp />
        </CONTEXT_LOGIN_REGISTER.Provider>
    );
};

export default Main;