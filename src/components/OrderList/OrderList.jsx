import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderListItem from '../OrderListItem/OrderListItem';
import {useEffect} from 'react';


function OrderList() {

    const dispatch = useDispatch();

    const orders = useSelector(store => store.orders);
    console.log('orders is', orders);

    const history = useHistory();

    const fetchOrderList = () => {
        axios.get('/api/order')
            .then((response) => {
                console.log('in fetchOrderList, and response.data is', response.data)
                dispatch({
                    type: 'SET_ORDER_LIST',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('error with fetchOrderList', error);
            })
        
    }

    useEffect(() => {
        fetchOrderList()
      }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Time Order Placed
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Cost
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, i) => (
                       <tr key={i}> <OrderListItem order={order} /></tr>
))}
                </tbody>
            </table>
            <p></p>
            <button onClick={() => history.push('/')}>Return to Home</button>
        </>
    )
}

export default OrderList;