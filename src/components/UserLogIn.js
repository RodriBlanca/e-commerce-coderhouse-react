import React, { useState } from 'react';
import user from "../assets/user-e-commerce.png";
import message from "../helpers/message";
import registeredUser from '../helpers/registeredUser';
import userImg from "../assets/user-e-commerce.png";
import LogInForm from './LogInForm';
import SignIn from './SignIn';

import './header.css';

const UserLogIn = () => {

    const [logUserName, setLogUserName] = useState('');
    const [logUserPassword, setLogUserPassword] = useState('');
    const [logInOrSignIn, setLogInOrSignIn] = useState(true);

    const handleUserName = (e) => setLogUserName(e.target.value);

    const handleUserPassword = (e) => setLogUserPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.getElementById('log-form');
        const formButton = document.getElementById('log-submit');
        

        // if(userName.length <= 5) {
        //     console.log('The user name must be more than 5 characters long');
        // }

        // if(userPassword.length <= 5) {
        //     const errorMessage = message('The user password must be more than 5 characters long');
        //     messageContainer.appendChild(errorMessage);

        //     setTimeout(() => {
        //         errorMessage.remove();
        //     }, 4000);
        // }

        registeredUser(logUserName);
        form.reset();
    }

    const handleRegisterForm = () => {
        setLogInOrSignIn(false);
    }

    // Back to Log Section, SignIn prop
    const handleBack = () => {
        setLogInOrSignIn(true);
    }

    let component;
    if(logInOrSignIn) {
        component = <LogInForm 
                        handleSubmit={handleSubmit}
                        handleUserName={handleUserName}
                        handleUserPassword={handleUserPassword}
                        handleRegisterForm={handleRegisterForm}
                    />
    } else {
        component = <SignIn 
                        handleBack={handleBack}
                    />
    }


    return(
        <div className="user">
            <label htmlFor="user-toggle" className="user-label">
                <img src={userImg} alt="user" className="user-img" id="user-input"/>
            </label>
            <input type="checkbox" className="user-checkbox" id="user-toggle"/>
            {component}
        </div>
    );
}

export default UserLogIn;