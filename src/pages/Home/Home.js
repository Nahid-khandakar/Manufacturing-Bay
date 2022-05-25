import React from 'react';
import AvailableParts from './AvailableParts';
import Banner from './Banner';
import SlatComponent from './SlatComponent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableParts></AvailableParts>
            <SlatComponent></SlatComponent>

        </div>
    );
};

export default Home;