import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderListItem from '../OrderListItem/OrderListItem';

function OrderList() {

    const dispatch = useDispatch();

    const orders = useSelector(store => store.orders)

    const history = useHistory();

    const fetchOrderList = () => {
        axios.get('/api/order')
            .then((response) => {
                dispatch({
                    type: 'SET_ORDER_LIST',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('error with fetchOrderList', error);
            })
        console.log('in fetchOrderList, and response.data is', response.data)
    }

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
                    {orders.map((order, i) => {
                        <OrderListItem key={i} order={order} />
                    })}
                </tbody>
            </table>
            <p></p>
            <button onClick={() => history.push('/')}>Return to Home</button>
        </>
    )
}

export default OrderList;