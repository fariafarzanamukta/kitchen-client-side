import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen my-4 rounded-xl" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UZZbz_-nkhsz2jRtjuxAj2sPyzFq8UsArg&usqp=CAU")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Foodies</h1>
                    <p className="mb-5">Order Your Favourite Food & Enjoy Your Food At Home.We will Deliver you fresh Testy Food</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;