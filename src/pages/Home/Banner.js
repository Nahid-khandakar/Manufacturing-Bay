import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import hand1 from '../../assest/image/hand1.jpg'


const Banner = () => {
    return (

        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hand1})` }}>
                <div className="hero-overlay bg-opacity-0 "></div>


                <div className="hero-content md:pl-0 xl:pl-10 text-neutral-content mr-auto">
                    <div className="max-w-md">
                        <h1 className="md:text-4xl xl:text-5xl font-extrabold text-primary">Manufacturing Bay</h1>
                        <p className="py-6 text-justify md:text-yellow-400 xl:text-zinc-800">Welcome to manufacturing bay , Here we manufacture car parts . we manufacture car brake disk , knob , piston , turbine, rime , speedometer ect</p>

                        <button className="btn btn-primary text-white">
                            Explore More
                            <span className='p-2 text-xl'><BsChevronDoubleDown /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;