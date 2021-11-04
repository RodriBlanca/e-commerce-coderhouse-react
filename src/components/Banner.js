import React from 'react';
import bannerImg from "../assets/banner-img.jpg";

import "./banner.css";

const Banner = () => (
    <section className="banner">
        <img src={bannerImg} alt="banner" className="banner-img"/>
        <h2 className="banner-text">CHECK OUT OUR LATEST RELEASES</h2>
        <button className="banner-button">Explore</button>
    </section>
);

export default Banner;
