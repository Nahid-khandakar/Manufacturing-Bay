import React from 'react';
import AvailableParts from './AvailableParts';
import Banner from './Banner';
import GetMobileApp from './GetMobileApp';
import SlatComponent from './SlatComponent';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableParts></AvailableParts>
            <SlatComponent></SlatComponent>
            <GetMobileApp></GetMobileApp>
        </div>
    );
};

export default Home;