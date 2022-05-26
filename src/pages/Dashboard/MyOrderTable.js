import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.partsName}</td>
            <td>{order.orderPartsQuantity}</td>
            <td>${order.price}</td>

            <td>

                {
                    (order.price && !order.paid) &&
                    <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm btn-warning">Pay</button>
                    </Link>
                }
                {
                    (order.price && order.paid) &&

                    <div>
                        <p className="text-success ">paid</p>
                        <p>{order.transactionId}</p>

                    </div>

                }

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