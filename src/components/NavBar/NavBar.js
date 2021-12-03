import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <Link className="nav-bar__item" activeClassName='active' to="/">Home</Link>
                <Link className="nav-bar__item" activeClassName='active' to="/about">About</Link>
                <Link className="nav-bar__item" activeClassName='active' to="/products">Products</Link>
            </ul>
        </nav>
    )
}

export default NavBar;