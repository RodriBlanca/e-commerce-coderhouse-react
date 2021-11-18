import React from 'react';
import MenuBtn from './MenuBtn';
import Trolley from './Trolley';
import UserLogIn from './UserLogIn';

import './header.css';

const Header = () => (
    <header className="header">
        <MenuBtn />
        <h1 className="header-title">e-commerce</h1>
        <div className="options">
            <UserLogIn />
            <Trolley />
        </div>    
    </header>
);

export default Header;
