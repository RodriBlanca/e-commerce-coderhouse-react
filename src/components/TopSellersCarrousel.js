import React from 'react';

import barcelona from "../assets/barcelona-jersey.jpg";
import adidasJacket from "../assets/adidas-jacket.jpg";
import conjuntoPuma from "../assets/conjunto-puma.jpeg";
import nikeTennis from "../assets/tennis-nike.jpg";

import "./topSellersCarrousel.css";

const TopSellersCarrousel = () => {
    return (
        <div className="carrousel">
            <figure>
                <img src={barcelona} alt="top-product__1"/>
                <img src={adidasJacket} alt="top-product__2"/>
                <img src={conjuntoPuma} alt="top-product__3"/>
                <img src={nikeTennis} alt="top-product__4"/>
            </figure>
        </div>
    )
}

export default TopSellersCarrousel;