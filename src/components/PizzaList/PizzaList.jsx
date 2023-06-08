import React from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function PizzaList () {

    const dispatch = useDispatch();


    const refreshPizza = () => {
        axios.get({
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

    return (
        <>
            
        
        
        
        
        </>


    )
}

export default PizzaList;