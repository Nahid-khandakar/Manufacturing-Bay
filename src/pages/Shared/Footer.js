import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className=''>
            <footer className="text-center  bg-gray-300 text-white">

                <div className="container px-6 pt-6">

                    <div className="flex justify-center mt-3">


                        <div className='text-2xl rounded-full border-2 border-rose-800 text-rose-800 w-9 h-9 m-1'>

                            <div className='grid justify-items-center mt-1'>
                                <BsFacebook />
                            </div>


                        </div>
                        <div className='text-2xl rounded-full border-2 border-rose-800 text-rose-800  w-9 h-9 m-1'>

                            <div className='grid justify-items-center mt-1'>
                                < BsGithub />
                            </div>


                        </div>

                        <div className='text-2xl rounded-full border-2 border-rose-800 text-rose-800  w-9 h-9 m-1'>

                            <div className='grid justify-items-center mt-1'>
                                <FiInstagram />
                            </div>


                        </div>


                        <div className='text-2xl rounded-full border-2 border-rose-800 text-rose-800  w-9 h-9 m-1'>

                            <div className='grid justify-items-center mt-1'>
                                <AiFillGoogleCircle />
                            </div>

                        </div>

                        <div className='text-2xl rounded-full border-2 border-rose-800 text-rose-800  w-9 h-9 m-1'>

                            <div className='grid justify-items-center mt-1'>
                                <AiFillLinkedin />
                            </div>

                        </div>




                    </div>

                </div>


                <div className="text-center text-zinc-900 pt-6 pb-10">
                    © 2021 Copyright :
                    <span className='text-rose-800'> Nahid Khandakar</span>
                </div>
            </footer>

        </div>
    );
};

export default Footer;