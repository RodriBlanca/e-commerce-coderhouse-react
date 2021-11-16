import React from 'react';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li className="nav-bar__item">Products</li>
                <li className="nav-bar__item">About</li>
                <li className="nav-bar__item">Top Seller</li>
            </ul>
        </nav>
    )
}

export default NavBar;