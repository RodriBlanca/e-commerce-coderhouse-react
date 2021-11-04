import React from 'react';
import trolley from "../../src/assets/cart.png";
import "./trolley.css";

const Trolley = () => (
    <div className="trolley">
        <label htmlFor="trolley">
            <img alt="trolley" src={trolley}/>
        </label>
        <input type="checkbox" className="trolley-input" id="trolley"/>
        <div className="products">
                <h3 className="products-title">TROLLEY</h3>
            <table>
                <thead>
                    <tr className="products-head">
                        <th className="products-head__data"></th>
                        <th className="products-head__data">Product</th>
                        <th className="products-head__data">Amount</th>
                        <th className="products-head__data">Price</th>
                        <th className="products-head__data"></th>
                    </tr>
                </thead>
                <tbody className="products-body"></tbody>
            </table>
            <div className="products-buttons">
                <button className="products-buttons__button delete">DELETE ALL</button>
                <button className="products-buttons__button total">TOTAL</button>
            </div>
        </div>
    </div>
)

export default Trolley;
