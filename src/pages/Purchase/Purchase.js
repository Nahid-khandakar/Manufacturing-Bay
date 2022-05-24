import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { set } from 'react-hook-form';
import { toast } from 'react-toastify';


const Purchase = () => {

    const { id } = useParams()

    const [user, loading] = useAuthState(auth);
    //console.log(user)

    //console.log(user.email)
    const [quantityError, setQuantityError] = useState(false)


    const url = `http://localhost:5000/purchase/${id}`
    const { data: purchaseItem, isLoading, refetch } = useQuery('purchaseItem', () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loading></Loading>
    }


    const handlePurchaseForm = (event) => {

        event.preventDefault();
        const totalParts = purchaseItem.availableQuantity
        const minimumOrderParts = purchaseItem.minimumQuantity


        const inputQuantity = event.target.quantity.value
        const quantity = parseInt(inputQuantity)
        const price = purchaseItem.price
        const number = event.target.number.value
        const address = event.target.address.value

        //console.log(name, userName, email, quantity, totalPrice, number, address)
        console.log(typeof quantity, quantity)



        if (quantity >= minimumOrderParts && quantity <= totalParts) {

            const name = purchaseItem.name
            const email = user?.email

            const restParts = totalParts - quantity
            const totalPrice = quantity * price
            console.log("q", typeof quantity)
            console.log("parts", typeof restParts, restParts)
            console.log("price", typeof totalPrice, totalPrice)

            setQuantityError(false)
            toast.success(`Thanks for purchase ${purchaseItem.name} , your bill  ${totalPrice} $`)



            const purchaseFormData = {
                partsName: name,
                purchaseEmail: email,
                availableQuantity: restParts,
                price: totalPrice,
                orderPartsQuantity: quantity,
                phone: number,
                address: address
            }


            fetch(`http://localhost:5000/parts/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }, body: JSON.stringify(purchaseFormData)
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    event.target.reset()
                    refetch()
                })


        }
        else {
            setQuantityError(true)
            event.target.reset()
            toast.warning(`set quantity minimum purchase or less then available parts`)
        }
    }




    return (


        <section className="text-gray-600">


            <div className="container px-14 py-20 mx-auto">
                <h1 className="text-4xl font-medium title-font text-primary mb-12 text-center">Purchase Details</h1>

                <div className="flex flex-wrap -m-4">

                    {/* part details */}
                    <div className="p-4 md:w-2/5 w-full">
                        <div className="h-full bg-gray-300 p-8 rounded">

                            <div className='mb-3'>
                                <p className="leading-relaxed mb-4 text-2xl font-semibold text-primary">Parts details</p>
                                <hr />


                                <p className='text-xl font-bold p-3'>Parts Name : {purchaseItem.name}</p>

                                <p className='text-xl font-semibold px-3'> Available Quantity :
                                    <span className='text-green-600 ml-3'>{purchaseItem.availableQuantity}</span>
                                </p>
                                <p className='text-xl font-semibold  px-3'>Minimum purchase require :
                                    <span className='text-red-600 ml-3'>{purchaseItem.minimumQuantity}</span>

                                </p>
                                <p className='text-xl font-semibold  px-3'>Price per unit : $
                                    <span className='text-yellow-600 ml-1'>{purchaseItem.price}</span>

                                </p>


                                <button className='btn btn-primary my-5 mx-3 text-white'>
                                    <Link to="/home">Home</Link>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* client requirement */}
                    <div className="p-4 md:w-3/5 w-full">
                        <div className="h-full bg-gray-300 p-8 rounded">

                            <p className="leading-relaxed mb-4 text-2xl font-semibold text-primary">Customer purchase details</p>
                            <hr />

                            <form className='' onSubmit={handlePurchaseForm}>

                                <div className='my-2'>
                                    <input type="text" class="input input-bordered  w-full max-w-sm"
                                        value={purchaseItem.name} disabled
                                    />
                                </div>

                                <div className='my-2'>
                                    <input type="text" class="input input-bordered w-full max-w-sm"
                                        value={user?.displayName} disabled
                                    />

                                </div>

                                <div className='my-2'>
                                    <input type="email" class="input input-bordered  w-full max-w-sm"
                                        value={user?.email}
                                        disabled
                                    />
                                </div>



                                {/* quantity */}
                                <div className='my-2'>
                                    <input type="number" name='quantity' placeholder={`minimum quantity ${purchaseItem?.minimumQuantity}`} className="input input-bordered  w-full max-w-sm" required />

                                    {
                                        quantityError === true ?



                                            <p className='ml-3 text-warning'>Wrong purchase quantity</p>

                                            :

                                            ''

                                    }
                                </div>


                                <div className='my-2'>
                                    <input
                                        type="number"
                                        placeholder="phone number"
                                        name='number'
                                        className="input input-bordered  w-full max-w-sm" />
                                </div>

                                <div className='my-2'>
                                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-sm" />
                                </div>

                                {
                                    quantityError === true ?
                                        <input className='btn btn-primary text-white my-2 w-full max-w-sm' disabled type="submit" value='Confirm purchase' />
                                        :
                                        <input className='btn btn-primary text-white my-2 w-full max-w-sm' type="submit" value='Confirm purchase' />
                                }


                            </form>

                        </div>

                    </div>


                </div>
            </div>
        </section>

    );
};

export default Purchase;