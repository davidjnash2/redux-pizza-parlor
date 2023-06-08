import axios from 'axios';


function Admin() {

    const fetchOrderList () => {

    }

    return (
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
                        {order.name}
                    </td>
                    <td>
                        {order.time}
                    </td>
                    <td>
                        {order.type}
                    </td>
                    <td>
                        {order.cost}
                    </td>
                </tr>
                }
            </tbody>

        </table>

    )
}

export default Admin;