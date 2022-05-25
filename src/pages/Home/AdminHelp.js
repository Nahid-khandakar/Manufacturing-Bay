import React from 'react';

const AdminHelp = () => {
    return (
        <div className='px-12'>
            <h2 className='text-2xl text-primary text-center font-extrabold uppercase '>Get Support</h2>
            <div className="flex justify-center mx-auto mt-2">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-7 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-primary rounded-full"></span>
            </div>

            <section className="flex flex-col max-w-full mx-auto overflow-hidden bg-base-100 rounded-lg shadow-lg md:flex-row md:h-60 mt-10">

                {/* text-section */}
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-primary ">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-white">For any query and complain</h2>

                        <p className="mt-2 text-sm text-white">Submit your any type of query and complain , Our admin will reply in email</p>
                    </div>
                </div>


                {/* form section */}
                {/* for future update */}
                <div className="flex flex-col justify-center items-center mx-auto">
                    <form>
                        <input type="text" placeholder="Your email" className="input input-bordered input-primary w-full my-2" />
                        <textarea className="textarea textarea-primary w-full " placeholder="Query or complain write here"></textarea>
                        <div className='mx-auto'>
                            <input className='btn btn-primary text-white btn-md w-full my-2' type="submit" value="submit" />
                        </div>

                    </form>
                </div>


            </section>
        </div>
    );
};

export default AdminHelp;