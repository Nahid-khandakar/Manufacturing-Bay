import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderTable from './MyOrderTable';



const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/?purchaseEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res form client ', res);
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem("accessToken")
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setMyOrders(data)
                })
        }

    }, [user])




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
                                ></MyOrderTable>)
                            }
                        </tbody>

                    </table>
                </div>
            }


        </div>
    );
};

export default MyOrder;