import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrder = ({ deleteOrder, refetch, setDeleteOrder }) => {

    const { partsName, purchaseEmail } = deleteOrder

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${purchaseEmail}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${partsName} is deleted`)
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="delete-order-parts" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <h3 className="font-bold text-lg text-red-600 p-6">Sure to delete {partsName}</h3>

                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-sm btn-error text-white">delete</button>
                        <label htmlFor="delete-order-parts" className="btn btn-sm btn-success text-white">Cancel</label>
                    </div>


                </div>
            </div>


        </div >
    );
};

export default DeleteOrder;