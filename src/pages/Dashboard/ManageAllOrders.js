import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrderTable from './ManageAllOrderTable';

const ManageAllOrders = () => {


    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch("http://localhost:5000/purchaseOrders").then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Purchase Email</th>
                            <th>Transaction ID</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <ManageAllOrderTable
                                    key={order._id}
                                    part={order}
                                    index={index}
                                    refetch={refetch}
                                >

                                </ManageAllOrderTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;