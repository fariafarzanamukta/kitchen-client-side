import React from 'react';
import ServiceHome from '../Shared/ServiceComponent/ServiceHome';
import Services from '../Shared/ServiceComponent/Services';
import Banner from './Banner/Banner';

const Home = ({ datasize }) => {
    return (
        <div className='max-w-screen-xl mx-auto '>
            <Banner></Banner>
            <ServiceHome datasize={datasize}></ServiceHome>
            <div>
            </div>
            {/* <Services dataLimit={dataLimit}></Services> */}



        </div>
    );
};

export default Home;