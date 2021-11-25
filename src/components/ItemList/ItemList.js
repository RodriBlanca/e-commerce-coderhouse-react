import React from 'react';
import Item from '../Item/Item';
import { useFetch } from '../../hooks/useFetch';

const ItemList = () => {

    const url = 'https://fakestoreapi.com/products';

    const state = useFetch(url);
    console.log(state.data)

    return (
        <div>
            {state.data.map(product => <Item 
                                            key={product.id}
                                            img={product.image}
                                            description={product.description}
                                            title={product.title}
                                        />
            )}
        </div>
    )
}

export default ItemList;