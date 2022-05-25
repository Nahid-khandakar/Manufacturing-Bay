import React from 'react';

const MyOrderTable = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.partsName}</td>
            <td>{order.orderPartsQuantity}</td>
            <td>{order.price}</td>

            <td>
                <button class="btn btn-sm btn-warning">Pay</button>
            </td>


            <td>
                <label
                    onClick={() => setDeleteOrder(order)}
                    htmlFor="delete-order-parts"
                    className="btn btn-sm btn-error text-white">Delete
                </label>
            </td>
        </tr>
    );
};

export default MyOrderTable;