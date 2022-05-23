import React from 'react';
import { CgNametag } from 'react-icons/cg';

const PartsCard = ({ part }) => {
    const { name, image, description, availableQuantity, minimumQuantity, price } = part


    return (
        <div className='mx-auto my-8'>

            <div className="card md:w-40  xl:w-96 bg-base-100 shadow-2xl">

                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title">
                        <span className='text-2xl text-primary'> <CgNametag /> </span>
                        {name}
                    </h2>

                    <hr />

                    <p className='text-justify '>{description}</p>

                    <p>
                        <span className='text-primary font-bold'>Available : </span>
                        <span className='text-success font-bold ml-2 text-xl'>{availableQuantity}</span>
                    </p>

                    <p>
                        <span className='text-primary font-bold'>Minimum Order : </span>
                        <span className='text-success font-bold ml-2 text-xl'>{minimumQuantity}</span>
                    </p>

                    <h2>
                        <span className='text-2xl text-yellow-600 font-bold mr-2'>$</span>
                        <span className='text-2xl font-bold'>{price}</span>
                        <span className='text-md font-semibold text-red-600'>/unit</span>

                    </h2>


                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Purchase</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default PartsCard;