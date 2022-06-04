import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import bannerImage from '../../assest/image/bannerImage.jpg'

const Banner = () => {
    return (

        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='sm:max-w-xs xl:max-w-xl' src={bannerImage} alt='banner' />
                <div className='px-5'>
                    <h1 className="md:text-4xl xl:text-5xl font-semibold text-primary">Manufacturing Bay Banner will update</h1>
                    <p className="py-6 text-justify">Welcome to manufacturing bay , Here we manufacture car parts . we manufacture car brake disk , knob , piston , turbine, rime , speedometer ect</p>

                    <button className="btn btn-primary text-white">
                        Explore More
                        <span className='p-2 text-xl'><BsChevronDoubleDown /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;