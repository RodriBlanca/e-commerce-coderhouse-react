import React from 'react';

const Item = ({title, image, category, price}) => {
    return (
        <div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>
                <p>{title}</p>
                <p>{category}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Item
