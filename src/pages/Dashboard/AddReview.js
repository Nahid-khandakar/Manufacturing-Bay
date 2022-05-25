import React from 'react';

const AddReview = () => {
    return (

        <div className='mt-5'>


            <section className="w-full max-w-xl px-6 py-4 mx-auto  rounded-md shadow-md bg-base-200 ">
                <h2 className="text-3xl font-semibold text-center text-primary">Give Your Review</h2>

                {/* main form */}
                <form className="mt-6">


                    {/* email and rating */}
                    <div className="items-center -mx-2 md:flex">

                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-primary">Email</label>

                            <input
                                placeholder='Your email'
                                className="block w-full px-4 py-2 text-gray-700 bg-base-100 rounded-md " type="email" required />
                        </div>

                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm font-medium text-primary">Rating</label>

                            <input
                                placeholder='Give rating between 1 to 5'
                                className="block w-full px-4 py-2 text-gray-700 bg-base-100 rounded-md " type="number" />
                        </div>

                    </div>


                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm font-medium text-primary">Review</label>

                        <textarea
                            placeholder='Write your review'
                            className="block w-full h-40 px-4 py-2 border rounded-md bg-base-100 "></textarea>
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