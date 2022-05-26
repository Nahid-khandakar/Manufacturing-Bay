import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrderTable = ({ part: order, index, refetch }) => {

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/purchaseOrders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                toast.success('This parts delete successfully ')
                refetch()
            })


    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.partsName}</td>
            <td>{order.purchaseEmail} </td>
            <td>{order.transactionId}</td>

            <td>
                {
                    <button
                        onClick={() => handleDelete(order._id)}
                        className='btn btn-sm btn-error text-white'>
                        Delete
                    </button>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrderTable;