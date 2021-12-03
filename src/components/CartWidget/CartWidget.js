import React from 'react';
import trolley from '../../assets/shopping-cart.png';

import './cartWidget.css';

const CartWidget = () => (
    <img alt="trolley" src={trolley} className="cart-widget"/>
);

export default CartWidget;