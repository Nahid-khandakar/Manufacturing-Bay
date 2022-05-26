import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {

    const { data: userReviews, isLoading, refetch } = useQuery('userReviews', () =>
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
        <div className='px-12 grid  md:grid-cols-1 xl:grid-cols-3 gap-4'>
            {
                userReviews.slice(-3).map(userReview => <ReviewCard
                    key={userReview._id}
                    userReview={userReview}
                ></ReviewCard>)
            }

        </div>
    );
};

export default Review;