import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import "./menuBtn.css";

const MenuBtn = () => {

    const url = 'https://fakestoreapi.com/products';

    const state = useFetch(url);

    return(
        <div className="menu">
            <label htmlFor="menu-toggle" className="menu-label">
                <span className="menu-line"/>
            </label>
            <input type="checkbox" className="menu-checkbox" id="menu-toggle" name="menu-input"/>
            <ul className="menu-list">
                <h3 className="menu-list__title">MENU</h3>
                <div>
                    <Link to="/" className="menu-list__item">Home</Link>
                </div>
                <div>
                    <Link to="/about" className="menu-list__item">About</Link>
                </div>
                <div>
                    <Link to="/category" className="menu-list__item">Category</Link>
                </div>
            </ul>
        </div>
    ); 
}

export default MenuBtn;