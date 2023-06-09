import React from 'react';

function OrderListItem({ order }) {

    console.log('order is ', order);

    return (
        <>
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
        </>
    )
}

export default OrderListItem;