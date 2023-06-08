import React from 'react';

function OrderListItem({ order }) {

    return (
        <>
            <tr key={order.id}>
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
        </>
    )
}

export default OrderListItem;