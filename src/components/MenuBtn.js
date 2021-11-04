import React from 'react';

import "./menuBtn.css";

const MenuBtn = () => (
    <div className="menu">
        <label htmlFor="menu-toggle" className="menu-label">
            <span className="menu-line"/>
        </label>
        <input type="checkbox" className="menu-checkbox" id="menu-toggle" name="menu-input"/>
        <ul className="menu-list">
            <h3 className="menu-list__title">MENU</h3>
            <div>
                <li className="menu-list__item">Products</li>
            </div>
            <div>
                <li className="menu-list__item">About</li>
            </div>
            <div>
                <li className="menu-list__item">Top Sellers</li>
            </div>
        </ul>
    </div>
);

export default MenuBtn;