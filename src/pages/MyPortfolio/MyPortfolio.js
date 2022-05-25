import React from 'react';

const MyPortfolio = () => {
    return (
        <section className="text-zinc-900 body-font">
            <div className="container px-5 mx-auto flex flex-wrap">

                {/* image section */}
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <div className="text-zinc-900 body-font">
                        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://i.ibb.co/bXS1XYg/IMG-0024-1.jpg" />
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-primary">Nahid Khandakar</h1>

                                <div className="alert shadow-lg my-4">
                                    <h1 className='mx-auto'>nahidkhandakar.11010@gmail.com</h1>
                                </div>
                                <div className="alert shadow-lg my-4">
                                    <h1 className='mx-auto'>International Islamic University Chittagong</h1>
                                </div>
                                <div className="alert shadow-lg my-4">
                                    <h1 className='mx-auto'>Skilled in HTML ,CSS , JS ,NODE-JS , REACT-JS ,MONGODB</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* project 1 */}
                <div className="flex flex-col flex-wrap lg:py-4 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

                    <h1 className='text-xl text-primary my-4 font-bold'>My Projects</h1>

                    <div className="flex flex-col mb-3 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Media Service</h2>
                            <p className="leading-relaxed text-base">Media service is a independent service type web site , This site provide Broadcast , spots cover , photo journalism , proofreading , write report , magazine feature service </p>
                            <a href='https://media-services-bfa19.web.app/' target="blank" className='btn btn-sm btn-primary my-5 text-white'>Live Link</a>
                        </div>
                    </div>


                    {/* project 2 */}
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Stokeify</h2>
                            <p className="leading-relaxed text-base">In stokeify  stock different computer parts and manage those stock parts . Generally  stock computer hard disk, desktop monitor, motherboard,printer, processor , ram ,GPU ect </p>
                            <a href='https://stokeify.web.app/' target="blank" className='btn btn-sm btn-primary my-5 text-white'>Live Link</a>
                        </div>
                    </div>


                    {/* project 3 */}
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ema John</h2>
                            <p className="leading-relaxed text-base">Ema john is a e-commerce site very first version of real amazon . Customers can buy some selected product form this site </p>
                            <a href='ema-john-7b966.web.app' target="blank" className='btn btn-sm btn-primary my-5 text-white'>Live Link</a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;