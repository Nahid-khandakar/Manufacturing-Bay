import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
const Purchase = () => {

    const { id } = useParams()


    const url = `http://localhost:5000/purchase/${id}`

    const { data: purchaseItem, isLoading } = useQuery('purchaseItem', () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (


        <section className="text-gray-600">


            <div className="container px-14 py-20 mx-auto">
                <h1 className="text-4xl font-medium title-font text-primary mb-12 text-center">Purchase Details</h1>

                <div className="flex flex-wrap -m-4">

                    {/* part details */}
                    <div className="p-4 md:w-2/5 w-full">
                        <div className="h-full bg-gray-300 p-8 rounded">


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
                    </div>

                    {/* client requirement */}
                    <div className="p-4 md:w-3/5 w-full">
                        <div className="h-full bg-gray-300 p-8 rounded">

                            <p className="leading-relaxed mb-4 text-2xl font-semibold text-primary">Customer purchase details</p>
                            <hr />

                        </div>
                    </div>


                </div>
            </div>
        </section>

    );
};

export default Purchase;