import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L1wb1Kx7dB88zRDmiV6BB2kSmKbFSJ3FYhu5UbZxthAvYMasgDeYUoozPw7I0tXEI3A8uvWmwNClPot2LWeBx9300XZJTmImJ');

    const { id } = useParams()
    //console.log(id)
    const url = `http://localhost:5000/orders/${id}`

    const { data: paymentRequest, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>


            <div class="card w-50 max-w-md bg-base-200 shadow-xl my-12 md:ml-0 xl:ml-16">
                <div class="card-body">
                    <h2 class="card-title text-error font-bold">Please Pay for :  {paymentRequest.partsName}</h2>
                    <p>Your purchase parts quantity : {paymentRequest.orderPartsQuantity}</p>
                    <p>Total amount: <span className='text-warning text-xl font-bold'>${paymentRequest.price}</span></p>
                </div>
            </div>

            <div class="card w-50 max-w-md bg-base-200 shadow-xl my-12 md:ml-0 xl:ml-16">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={paymentRequest} />
                    </Elements>
                </div>
            </div>



        </div>
    );
};

export default Payment;