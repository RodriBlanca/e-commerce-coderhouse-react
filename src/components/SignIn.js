import React from 'react';
import back from "../assets/left-arrow.png";

const SignIn = ({handleBack}) => {



    return (
        <form className="sign-form">
            <img src={back} alt="back" className="sign-form__arrow" onClick={handleBack}/>
            <h3 className="sign-form__title">Sign In</h3>
            <div className="sign-name">
                <label className="sign-name__label">Name</label>
                <input className="sign-name__input"/>
            </div>
            <div className="sign-surname">
                <label className="sign-surname__label">Surname</label>
                <input className="sign-surname__input"/>
            </div>
            <div className="sign-email">
                <label className="sign-email__label">E-mail</label>
                <input className="sign-email__input"/>
            </div>
            <div className="sign-password">
                <label className="sign-password__label">Password</label>
                <input className="sign-password__input"/>
            </div>
            <button className="sign-form__button">Sign In</button>
            <div id="message-container"></div>
        </form>
    );
}

export default SignIn;