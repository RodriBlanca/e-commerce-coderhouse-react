import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
        if(counter < stock) {
            setCounter(counter + 1);
        }
    }

    const handleSubstract = () => {
        if(counter > stock) {
            setCounter(counter - 1);
        }
    }

    const handleAdd = () => {
        onAdd = counter;
        const p = document.createElement('p');
        p.textContent = onAdd;
        const messageContainer = document.getElementById('message-counter');
        messageContainer.appendChild(p);
    }

    return (
        <>
            <div>
                <button onClick={handleSum}>+</button>
                <p>{counter}</p>
                <button onClick={handleSubstract}>-</button>
            </div>
            <button onClick={handleAdd}>Agregar al carrito</button>
            <div id="message-counter"></div>
        </>
    )
}

export default ItemCount;