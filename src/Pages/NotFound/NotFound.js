import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen grid place-items-center'>
        <div className='text-center'>
            <img src='https://static.vecteezy.com/system/resources/previews/002/006/374/original/modern-flat-design-illustration-of-404-error-page-free-vector.jpg' alt="" className='w-1/3 mx-auto' />
            <h3 className='my-2 text-xl text-warning'>Page not found! <Link to="/"><button className=' btn-link text-primary'>Back to Home</button></Link></h3>
        </div>
    </div>
    );
};

export default NotFound;