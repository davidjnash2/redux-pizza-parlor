import React from 'react';
import { useDispatch } from 'react-redux';


function PizzaListItem({pizza}) {

    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                ...pizza,
                quantity: 1,
            }
        })
    }

    return (

        <div>
            <img src={pizza.image_path} alt="Image of the pizza" /> 
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button onClick={addPizzaToCart}>Add</button>
        </div>

        


    )
}

export default PizzaListItem;