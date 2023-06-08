import React from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function PizzaList () {

    const dispatch = useDispatch();

    const pizzaReducer = useSelector(store => store.pizzaReducer)


    const refreshPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then((response) => {
            
            dispatch({
                type: 'GET_PIZZA',
                payload: response.data
            })
        })
        .catch((error) => {
            console.log('Error on GET /PizzaList' , error)
        })


    }

    useEffect(() => {
        refreshPizza()
      }, [])

    return (
        <>

            <div>
                {pizzaReducer.map((pizza) => {
                    return (
                        <PizzaListItem 
                        key={pizza.id}
                        pizzaReducer={pizzaReducer}
                        pizza={pizza}
                        />
                    )
                })}
            </div>
        
        
        
        
        </>


    )
}

export default PizzaList;