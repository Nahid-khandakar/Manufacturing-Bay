import React from 'react';
import AddReview from '../Dashboard/AddReview';
import AdminHelp from './AdminHelp';
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
            <AdminHelp></AdminHelp>
            <GetMobileApp></GetMobileApp>
        </div>
    );
};

export default Home;