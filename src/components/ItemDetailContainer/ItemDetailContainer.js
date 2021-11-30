import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useFetch } from '../../hooks/useFetch';

const ItemDetailContainer = () => {
    const url = 'https://fakestoreapi.com/products';

    const state = useFetch(url);
    console.log(state.data)

    return (
        <div>
            {state.data.map(product => <ItemDetail 
                                            key={product.id}
                                            img={product.image}
                                            description={product.description}
                                            title={product.title}
                                        />
            )}
        </div>
    )
}

export default ItemDetailContainer;
