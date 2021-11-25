import React from 'react';

//CSS
import './item.css';

const Item = ({title, img, description}) => (
    <div className="item">
        <img src={img} alt="product" className="item-img"/>
        <div className="item-data">
            <p className="item-data__title">{title}</p>
            <button className="item-data__button">Ver Más</button>
            <p className="item-data__description">{description}</p>
        </div>
    </div>
);

export default Item;