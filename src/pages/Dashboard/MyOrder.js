import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import DeleteOrder from './DeleteOrder';
import MyOrderTable from './MyOrderTable';
import Loading from '../Shared/Loading'
import { useState } from 'react';



const MyOrder = () => {

    const [user, loading] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null)
    // const [myOrders, setMyOrders] = useState([])



    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () =>
        fetch(`http://localhost:5000/orders/?purchaseEmail=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )


    if (isLoading || loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            {
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th> Total Price</th>
                                <th>Payment</th>
                                <th>Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                myOrders.map((order, index) => <MyOrderTable
                                    key={order._id}
                                    index={index}
                                    order={order}
                                    setDeleteOrder={setDeleteOrder}
                                ></MyOrderTable>)
                            }
                        </tbody>

                    </table>
                </div>
            }

            {
                deleteOrder && <DeleteOrder
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                >
                </DeleteOrder>
            }


        </div>
    );
};

export default MyOrder;