import React from 'react';
import TopSellersCarrousel from './TopSellersCarrousel';

import "./topSellers.css";

const TopSellers = () => (
    <section className="top-sellers">
        <h3 className="top-sellers__title">TOP SELLERS</h3>
        <TopSellersCarrousel />
    </section>
);

export default TopSellers;