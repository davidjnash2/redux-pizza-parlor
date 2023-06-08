import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function OrderList() {

    const orders = useSelector(store => store.products)

    const history = useHistory();

    const fetchOrderList() => {

        axios.get('/api/order',)



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