import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';
const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1}/>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;