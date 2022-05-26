import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {

    const [reviewError, setReviewError] = useState(false)
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleReviewForm = (event) => {
        event.preventDefault();


        const rating = event.target.rating.value
        const review = event.target.review.value

        console.log(rating, review)

        if (rating > 0 && rating <= 5) {

            const email = user.email
            const name = user.displayName

            const reviewData = {
                name: name,
                email: email,
                rating: rating,
                review: review
            }

            console.log(reviewData)

            fetch(`http://localhost:5000/userReview`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(reviewData)


            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    event.target.reset()
                })




            setReviewError(false)
            toast.success('Review save successfully')
        } else {
            toast.error('Something error')
            setReviewError(true)
        }

    }
    return (

        <div className='mt-5'>


            <section className="w-full max-w-xl px-6 py-4 mx-auto  rounded-md shadow-md bg-base-200 ">
                <h2 className="text-3xl font-semibold text-center text-primary">Give Your Review</h2>

                {/* main form */}
                <form className="mt-6" onSubmit={handleReviewForm}>


                    {/* email and rating */}
                    <div className="items-center -mx-2 md:flex">

                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-primary">Email</label>

                            <input
                                value={user.email}
                                readOnly
                                placeholder='Your email'
                                className="block w-full px-4 py-2 text-gray-700 bg-base-100 rounded-md " type="email" required />
                        </div>

                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm font-medium text-primary">Rating</label>

                            <input
                                name='rating'
                                placeholder='Give rating between 1 to 5'
                                className="block w-full px-4 py-2 text-gray-700 bg-base-100 rounded-md " type="number" />
                            {
                                reviewError === true ?
                                    <p>Rating must be between 1 to 5</p>
                                    :
                                    " "
                            }
                        </div>

                    </div>


                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm font-medium text-primary">Review</label>

                        <textarea
                            name='review'
                            placeholder='Write your review'
                            className="block w-full h-40 px-4 py-2 border rounded-md bg-base-100 " required></textarea>
                    </div>



                    <div className="flex justify-center mt-6">
                        <input type="submit" value="Add Review" className="px-4 py-2  btn btn-primary text-white  rounded-md" />

                    </div>


                </form>
            </section>

        </div>

    );
};

export default AddReview;