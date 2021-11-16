import React, { useState } from 'react';
import back from "../assets/left-arrow.png";

const SignIn = ({handleBack}) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        const userName = e.target.value;

        if(userName.length === 0 || userName === '') {
            console.log('Name is invalid')
        }

        setName(userName);
    }

    const handleSurname = (e) => {
        const userSurname = e.target.value;

        if(userSurname === 0 || userSurname === '') {
            console.log('Surname is invalid')
        }

        setSurname(e.target.value);
    }

    const handleEmail = (e) => {
        const userEmail = e.target.value;

        


        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        const userPassword = e.target.value;

        if(userPassword.length < 5) {
            console.log('Password is too short');
        }

        setPassword(userPassword);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
    }

    return (
        <form className="sign-form" onSubmit={handleSignIn}>
            <img src={back} alt="back" className="sign-form__arrow" onClick={handleBack}/>
            <h3 className="sign-form__title">Sign In</h3>
            <div className="sign-name">
                <label className="sign-name__label">Name</label>
                <input className="sign-name__input" onChange={handleName}/>
            </div>
            <div className="sign-surname">
                <label className="sign-surname__label">Surname</label>
                <input className="sign-surname__input" onChange={handleSurname}/>
            </div>
            <div className="sign-email">
                <label className="sign-email__label">E-mail</label>
                <input className="sign-email__input" onChange={handleEmail}/>
            </div>
            <div className="sign-password">
                <label className="sign-password__label">Password</label>
                <input className="sign-password__input" onChange={handlePassword} type="password"/>
            </div>
            <button className="sign-form__button">Sign In</button>
            <div id="message-container"></div>
        </form>
    );
}

export default SignIn;