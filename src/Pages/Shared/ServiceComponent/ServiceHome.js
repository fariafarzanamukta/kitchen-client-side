import React from 'react';
import { NavLink } from 'react-router-dom';
import Services from './Services';

const ServiceHome = ({ datasize }) => {
    return (
        <div>
            <Services datasize={datasize}></Services>
            <button
                className="px-8 py-3 mx-auto text-center mb-6 bg-violet-500 text-white rounded hover:bg-white hover:text-gray-800 transition duration-300 font-bold font-serif">
                <NavLink to="/service">
                    SEE ALL FOOD MENU
                </NavLink>
            </button>
        </div >
    );
};

export default ServiceHome;