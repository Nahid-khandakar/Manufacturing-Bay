import React from 'react';

const PartsCard = ({ part }) => {
    const { name, image, description, availableQuantity, minimumQuantity, price } = part


    return (
        <div className='mx-auto my-8'>

            <div className="card md:w-40  xl:w-96 bg-base-100 shadow-2xl">

                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{availableQuantity}</p>
                    <p>{minimumQuantity}</p>
                    <p>{price}</p>


                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default PartsCard;