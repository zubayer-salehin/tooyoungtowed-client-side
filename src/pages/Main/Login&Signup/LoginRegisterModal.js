import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import "./Login&Register.css";


const LoginRegisterModal = () => {

    const [singUpModal, setSignUpModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    return (
        <div>
            <Login loginModal={loginModal} setLoginModal={setLoginModal} setSignUpModal={setSignUpModal}></Login>
            <SignUp singUpModal={singUpModal} setSignUpModal={setSignUpModal} setLoginModal={setLoginModal}></SignUp>
        </div>
    );
};

export default LoginRegisterModal;