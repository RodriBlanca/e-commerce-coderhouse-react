import React from 'react';
import Banner from './Banner';
import TopSellers from './TopSellers';

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