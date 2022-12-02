import React from 'react';

const Popularity = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mt-2 mb-10">
                <div className="card-body">
                    <h1 className='text-center text-3xl font-bold mb-3'>Our Popularity of Social Platform</h1>
                    <div className='flex justify-evenly pb-6'>
                        <div>
                            <h2 className="text-2xl font-bold">700k</h2>
                            <p>Youtube Subscribers</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">2.4m</h2>
                            <p>Instagram Followers</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">100k</h2>
                            <p>Dribbble Shot Likes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Popularity;