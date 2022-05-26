import React from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ userReview }) => {

    const { name, rating, review } = userReview
    //console.log(userReview)

    return (
        <div className=''>
            <div className="max-w-sm  rounded-lg border border-gray-200 shadow-md bg-base-100 mx-auto">

                <div className="flex flex-col items-center py-10">

                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='review person' />
                        </div>
                    </div>

                    <h5 className="my-3 text-xl font-medium text-primary">{name}</h5>
                    <p className="text-zinc-900">{review}</p>


                    <div className='text-center'>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar style={{ color: 'goldenrod' }}></FaStar>}
                            readonly
                        ></Rating>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ReviewCard;