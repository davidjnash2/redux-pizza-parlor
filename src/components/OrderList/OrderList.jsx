import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function OrderList() {

    const dispatch = useDispatch();

    const orders = useSelector(store => store.orders)

    const history = useHistory();

    const fetchOrderList = () => {
        axios.get('/api/order')
            .then((response) => )
            dispatch({
                type: 'SET_ORDER_LIST',
                payload: response.data
            })
            .catch((error) =>{
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
                    {.map()=>
                    <tr>
                        <td>
                            {order.customer_name}
                        </td>
                        <td>
                            {order.time}
                        </td>
                        <td>
                            {order.type}
                        </td>
                        <td>
                            {order.total}
                        </td>
                    </tr>
                }
                </tbody>

            </table>
            <p></p>
            <button onClick={(event) => history.push('/')}>Return to Home</button>
        </>
    )
}

export default OrderList;