import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user, loading] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])

    useEffect((user) => {
        if (user) {
            fetch(`http://localhost:5000/orders/?purchaseEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json)
                .then(data => setMyOrders(data))
        }

    }, [user])



    return (
        <div>
            my order
        </div>
    );
};

export default MyOrder;