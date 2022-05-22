import React from 'react';
import bannerImage from '../../assest/image/bannerImage.jpg'

const Banner = () => {
    return (

        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='sm:max-w-sm xl:max-w-2xl' src={bannerImage} alt='banner' />
                <div className='px-5'>
                    <h1 class="md:text-4xl xl:text-5xl font-semibold text-primary">Manufacturing Bay</h1>
                    <p class="py-6 text-justify">Welcome to manufacturing bay , Here we manufacture car parts . we manufacture car brake disk , knob , piston , turbine, rime , speedometer ect</p>

                    <button class="btn btn-primary text-white">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;