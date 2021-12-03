import React from 'react';
import Banner from '../Banner/Banner';
import TopSellers from '../TopSellers/TopSellers';

import "./main.css";

const Main = () => {
    return (
        <main className="main">
            <Banner />
            <TopSellers />
        </main>
    )
}

export default Main;