import React, { useEffect, useState } from 'react';
// import { useFetch } from '../../hooks/useFetch';
import Item from '../Item/Item';

const ItemListContainer = () => {

    const [item, setItem] = useState([]);

    const url = 'https://api.mercadolibre.com/sites/MLA/categories';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem([data]));
    }, [])

    return (
        <div>
            {item.map(it => <Item 
                                            key={it.id}
                                            title={it.name}
                                        />
            )}
        </div>
    )
}

export default ItemListContainer
