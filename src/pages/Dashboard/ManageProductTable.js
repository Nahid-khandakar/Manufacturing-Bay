import React from 'react';
import { toast } from 'react-toastify';


const ManageProductTable = ({ part, index, refetch }) => {

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/parts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('This parts delete successfully ')
                refetch()
            })


    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{part.name}</td>
            <td>{part.availableQuantity} </td>
            <td>{part.price}</td>

            <td>
                {
                    <button
                        onClick={() => handleDelete(part._id)}
                        className='btn btn-sm btn-error text-white'>
                        Delete
                    </button>
                }
            </td>
        </tr>
    );
};

export default ManageProductTable;