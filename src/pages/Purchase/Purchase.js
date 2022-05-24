import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Purchase = () => {

    const { id } = useParams()

    const [user, loading] = useAuthState(auth);
    //console.log(user)

    const [quantityError, setQuantityError] = useState(true)

    const url = `http://localhost:5000/purchase/${id}`
    const { data: purchaseItem, isLoading } = useQuery('purchaseItem', () =>
        fetch(url).then(res =>
            res.json()
        )
    )





    if (isLoading || loading) {
        return <Loading></Loading>
    }




    const handleQuantity = (event) => {

        event.preventDefault();
        const minimum = purchaseItem.minimumQuantity
        const maximum = purchaseItem.availableQuantity

        const inputQuantity = event.target.partsQuantity.value


        if (inputQuantity > minimum && inputQuantity <= maximum) {
            console.log(inputQuantity, minimum, maximum)
            setQuantityError(true)
        } else {
            console.log('fuck you bitch')
            setQuantityError(false)
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
                            </div>

                            <hr />

                            {/* quantity add */}
                            <div>
                                <form className='px-3 mt-4' onSubmit={handleQuantity}>
                                    <p className='text-warning text-l font-bold'>How much parts you need</p>

                                    <input
                                        type="number"
                                        placeholder={`Minimum Quantity ${purchaseItem.minimumQuantity}`}
                                        className="input w-full max-w-xs"
                                        name='partsQuantity'
                                    />

                                    <input
                                        type='submit'
                                        className='btn btn-primary ml-2 text-white' value='Quantity'>
                                    </input>
                                </form>

                                {
                                    quantityError === false ?
                                        <p>give another war</p>
                                        :
                                        ''
                                }
                            </div>



                        </div>
                    </div>

                    {/* client requirement */}
                    <div className="p-4 md:w-3/5 w-full">
                        <div className="h-full bg-gray-300 p-8 rounded">

                            <p className="leading-relaxed mb-4 text-2xl font-semibold text-primary">Customer purchase details</p>
                            <hr />

                            <form className=''>

                                <div className='my-2'>
                                    <input type="text" class="input input-bordered  w-full max-w-sm"
                                        value={purchaseItem.name} readOnly
                                    />
                                </div>

                                <div className='my-2'>
                                    <input type="text" class="input input-bordered w-full max-w-sm"
                                        value={user?.displayName} readOnly
                                    />

                                </div>

                                <div className='my-2'>
                                    <input type="email" class="input input-bordered  w-full max-w-sm"
                                        value={user?.email}
                                    />
                                </div>



                                {/* quantity */}
                                <div className='my-2'>
                                    <input type="number" placeholder="Quantity" class="input input-bordered  w-full max-w-sm" />

                                </div>

                                {/* price */}
                                <div className='my-2'>
                                    <input type="number" placeholder="Price" class="input input-bordered w-full max-w-sm" />
                                </div>


                                <div className='my-2'>
                                    <input
                                        type="number"
                                        placeholder="phone number"
                                        name='Phone Number'
                                        class="input input-bordered  w-full max-w-sm" />
                                </div>

                                <div className='my-2'>
                                    <input type="text" placeholder="Address" class="input input-bordered w-full max-w-sm" />
                                </div>




                                <input className='btn btn-primary text-white my-2 w-full max-w-sm' type="submit" value='Confirm purchase' />

                            </form>

                        </div>
                    </div>


                </div>
            </div>
        </section>

    );
};

export default Purchase;