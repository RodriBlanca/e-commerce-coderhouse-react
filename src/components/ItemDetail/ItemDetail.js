import React from 'react';
import './itemDetail.css';

const ItemDetail = ({title, img, description}) => {
    return (
        <div className="item">
            <img src={img} alt="product" className="item-img"/>
            <div className="item-data">
                <p className="item-data__title">{title}</p>
                <button className="item-data__button">Ver Más</button>
                <p className="item-data__description">{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
