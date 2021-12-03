import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <h4 className="footer-title">e-commerce</h4>
            <div className="footer-container">
                <div className="social">
                    <h5 className="social-title">SOCIAL</h5>
                    <ul className="social-list">
                        <li className="social-list__item">Instagram</li>
                        <li className="social-list__item">Facebook</li>
                        <li className="social-list__item">Youtube</li>
                        <li className="social-list__item">Mail</li>
                    </ul>
                </div>
            </div>
            <p>All rights reserved</p>
        </footer>
    )
}

export default Footer;