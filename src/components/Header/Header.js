import React from 'react';
import MenuBtn from '../MenuBtn/MenuBtn';
import Cart from '../Cart/Cart';
import UserLogIn from '../UserLogIn';
import { Link } from 'react-router-dom';

// CSS
import './header.css';

const Header = () => (
    <header className="header">
        <MenuBtn />
        {/* <h1 className="header-title">e-commerce</h1> */}
        <Link className="header-title" to="/">e-commerce</Link>
        <div className="options">
            <UserLogIn />
            <Cart />
        </div>    
    </header>
);

export default Header;
