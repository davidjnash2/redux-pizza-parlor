import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';



function  OrderForm () {
    const [totalDisplay, setTotalDisplay] = useState(0)
    const cart = useSelector(  store => store.cart)

    const [orderToAdd, setOrderToAdd] = useState({
        customer_name: '', 
        street_address: '',
        city: '',
        zip: '', 
        total: 0,
        type: 'Delivery',
    });

    const history = useHistory();

    const backButton = () => {
        history.push('/');    
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

    let total = 0;
    const handleTotal = () => {

        let sum = 0;
        {cart.map((item, i) => {
            sum += item.price/1
        })}
      total += sum;
      setTotalDisplay(total);
    }



    const addOrder = (event) => {
        event.preventDefault();
        handleTotal();

        postOrder();
    


        }
    const postOrder = () => {
        const pizzaForServer = cart.map(pizza => ({
            id: pizza.id,
            quantity: pizza.quantity,
        }));
        axios.post('/api/order', {
            ...orderToAdd,
            total:total,
            pizzas: pizzaForServer
        })
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        })
    }
        // const hailMary = () => {
        //     handleTotal();
            
        // } 

     useEffect(() => {
        
       handleTotal();
        
     }, [])

     

    return (
        <>
        <header>
            <h2>Prime Pizza</h2> 
            <b>Total: {totalDisplay}</b>
            <button onClick={backButton}>BACK</button>  
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