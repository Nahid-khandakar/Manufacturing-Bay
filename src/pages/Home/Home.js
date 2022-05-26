import React from 'react';
import AdminHelp from './AdminHelp';
import AvailableParts from './AvailableParts';
import Banner from './Banner';
import GetMobileApp from './GetMobileApp';
import Review from './Review';
import SlatComponent from './SlatComponent';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableParts></AvailableParts>
            <Review></Review>
            <SlatComponent></SlatComponent>
            <AdminHelp></AdminHelp>
            <GetMobileApp></GetMobileApp>
        </div>
    );
};

export default Home;