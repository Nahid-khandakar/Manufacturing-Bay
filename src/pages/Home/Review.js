import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {

    const { data: userReviews, isLoading } = useQuery('userReviews', () =>
        fetch("http://localhost:5000/userReview", {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (


        <div>

            <h2 className='text-2xl text-center text-primary font-bold'>Available Parts</h2>

            <div className="flex justify-center mx-auto mt-2 mb-10">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-7 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-primary rounded-full"></span>
            </div>


            <div className='px-3 grid  md:grid-cols-1 xl:grid-cols-3 gap-4'>
                {
                    userReviews.slice(-3).map(userReview => <ReviewCard
                        key={userReview._id}
                        userReview={userReview}
                    ></ReviewCard>)
                }

            </div>
        </div>
    );
};

export default Review;