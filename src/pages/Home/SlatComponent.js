import React from 'react';

const SlatComponent = () => {
    return (
        <div className='md:px-12 xl:px-14 my-10'>


            <h2 className='text-2xl text-primary text-center font-bold my-5'>Business Summary</h2>
            <div className="flex justify-center mx-auto mb-4">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-7 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-primary rounded-full"></span>
            </div>



            <div className="stats shadow w-full">

                <div className="stat px-10">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc text-lg">21% more than last month</div>
                </div>

                <div className="stat px-10">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Purchase Parts</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc text-lg">10% more than last month</div>
                </div>

                <div className="stat py-10">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" alt='person' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">77%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary text-lg">33% tasks remaining</div>
                </div>

            </div>

        </div>
    );
};

export default SlatComponent;