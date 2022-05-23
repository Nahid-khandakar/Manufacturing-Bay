import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className=' py-10'>


            <div className="max-w-xs mx-auto overflow-hidden  rounded-lg shadow-lg">
                <img className="object-cover w-full h-full" src="https://i.ibb.co/FmSBfB3/error.jpg" alt="avatar" />

                <div className="py-5 text-center">
                    <h1 className="block text-4xl text-primary font-bold p-6">404 !!!</h1>

                    <Link to='/home'>
                        <button className="btn btn-wide btn-primary text-white">Home</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Error404;