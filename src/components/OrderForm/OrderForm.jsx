import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';



function  OrderForm () {
    
    const cart = useSelector(  store => store.cart)

    const [orderToAdd, setOrderToAdd] = useState({
        customer_name: '', 
        street_address: '',
        city: '',
        zip: '', 
        total: 0,
        type: 'Delivery',
        pizzas: []
    });



    const addPizzasToOrder = () => {
        {cart.map((item, i) => {
            setOrderToAdd({
                ...orderToAdd,
                pizzas: [...orderToAdd.pizzas, {id:item.id, quantity:1}]
            })
        })}
    }

    const handleType =  (event) => {
        setOrderToAdd({
            ...orderToAdd,
            type: event
        });
    }
    

    const handleCustomerChange = (event) => {
        setOrderToAdd({
        ...orderToAdd,
        customer_name: event
        });
    }

    const handleAddressChange = (event) => {
        setOrderToAdd({
            ...orderToAdd,
            street_address: event
        });
    }

    const handleCityChange = (event) => {
        setOrderToAdd ({
            ...orderToAdd,
            city:  event
        });
    }

    const handleZipChange = (event) => {
        setOrderToAdd({
            ...orderToAdd, 
            zip: event
        });
    }


    const handleTotal = () => {

        let sum = 0;
        {cart.map((item, i) => {
            sum += item.price/1
        })}
        setOrderToAdd({
            ...orderToAdd,
            total: sum
        })
    }
    const addOrder = (event) => {
        event.preventDefault();
        handleTotal();



            axios.post('/api/order', orderToAdd)
            .then(response => {
            })
            .catch(error => {
                console.log(error)
            })
        }
    

     useEffect(() => {
        handleTotal(), addPizzasToOrder()
     }, [])

    return (
        <>
        <header>
            <h2>Prime Pizza</h2> 
            <b>Total: {orderToAdd.total}</b>
        </header>

        <form onSubmit={(event) => addOrder(event)}>
            <div>
                <input type="text" 
                placeholder='Pick up or Delivery'
                onChange={(event) => handleType(event.target.value)}
                
                />
            <input
                onChange={(event) =>handleCustomerChange(event.target.value)}
                type='text'
                placeholder='name'
            />
            </div>

            <div>
            <input 
            onChange={(event) => handleAddressChange(event.target.value)}
            type='text'
            placeholder='Address'
            />
            </div>

            <div>
            <input 
            onChange={(event) => handleCityChange(event.target.value)}
            type='text'
            placeholder='city'
            />
            </div>


            <div>
            <input 
            onChange={(event) => handleZipChange(event.target.value)}
            type='text'
            placeholder='Zipcode'
            />
            <button type="submit">submit</button>
            </div>


        </form>
            </>

    );





}




export default OrderForm;