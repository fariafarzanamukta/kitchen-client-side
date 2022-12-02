import React from 'react';
import ServiceHome from '../Shared/ServiceComponent/ServiceHome';
import Services from '../Shared/ServiceComponent/Services';
import Banner from './Banner/Banner';
import Popularity from './Popularity';

const Home = ({ datasize }) => {
    return (
        <div className='max-w-screen-xl mx-auto '>
            <Banner></Banner>
            <ServiceHome datasize={datasize}></ServiceHome>
            <Popularity></Popularity>



        </div>
    );
};

export default Home;