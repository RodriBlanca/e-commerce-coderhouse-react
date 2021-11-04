import React, { useState } from 'react';
import user from "../assets/user-e-commerce.png";
import message from "../helpers/message";

import './header.css';

const UserLogIn = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleUserName = (e) => setUserName(e.target.value);

    const handleUserPassword = (e) => setUserPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const messageContainer = document.getElementById('message-container');
        const form = document.getElementById('log-form');
        const formButton = document.getElementById('log-submit');
        

        if(userName.length <= 5) {
            console.log('The user name must be more than 5 characters long');
        }

        if(userPassword.length <= 5) {
            const errorMessage = message('The user password must be more than 5 characters long');
            messageContainer.appendChild(errorMessage);

            setTimeout(() => {
                errorMessage.remove();
            }, 4000);
        }

        form.reset();
        console.log(formButton)
    }

    return(
        <div className="user">
            <img src={user} alt="user" className="user-img"/>
            <input type="checkbox" className="user-checkbox" id="user-toggle"/>
            <form className="user-form" id="log-form" onSubmit={handleSubmit}>
                <h3 className="user-form__title">MY ACCOUNT</h3>
                <div className="user-options">
                    <label className="user-options__label">User</label>
                    <input className="user-options__input" id="user" onChange={handleUserName}/>
                </div>
                <div className="password-options">
                    <label className="password-options__label">Password</label>
                    <input className="password-options__input" id="password" type="password" onChange={handleUserPassword}/>
                </div>
                <button className="user-form__button" id="log-submit">Log In</button>
                <p className="user-form__text">Not an account yet?
                    <a className="user-form__link">Register here</a>
                </p>
                <div id="message-container"></div>
            </form>
        </div>
    );
}

export default UserLogIn;