import React from 'react';

const LogInForm = (props) => {

    const {handleSubmit, handleUserName, handleUserPassword, handleRegisterForm} = props;

    return (
        <form className="user-form" id="log-form" onSubmit={handleSubmit}>
                
                <h3 className="user-form__title">MY ACCOUNT</h3>
                <div className="user-options">
                    <label className="user-options__label" htmlFor="log-user">User</label>
                    <input className="user-options__input" id="log-user" onChange={handleUserName}/>
                </div>
                <div className="password-options">
                    <label className="password-options__label" htmlFor="log-password">Password</label>
                    <input className="password-options__input" id="log-password" type="password" onChange={handleUserPassword}/>
                </div>
                <button className="user-form__button" id="log-submit">Log In</button>
                <p className="user-form__text">Not an account yet?
                    <a className="user-form__link" onClick={handleRegisterForm}>Register here</a>
                </p>
                <div id="message-container"></div>
            </form>
    );
}

export default LogInForm;
