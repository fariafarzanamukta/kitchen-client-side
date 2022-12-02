import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodname.value;
        const price = form.price.value;
        const img = form.img.value;
        const food_details = form.details.value;

        const service = {
            foodName,
            price,
            img,
            food_details
        }
        console.log(service);
        fetch('https://farias-cloud-kitchen.onrender.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Service Added Successfully");
                }
            })
            .catch(er => {
                toast.error("Service Not Added");
            });

    }
    return (
        <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-3xl font-bold text-center mt-6 mb-2'>Add New Food</h1>
            <div className=' flex items-center justify-center w-[60%]'>

                <form className='w-full flex-col items-center' onSubmit={handleAddService}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input name='foodname' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text">Food Image Url</span>
                        </label>
                        <input name='img' type="text" placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Food Details</span>
                        </label>
                        <input name='details' type="text" placeholder="Type here" className="input input-bordered w-full" />



                    </div>
                    <button className='btn btn-primary my-3' type="submit">
                        Add New Service
                    </button>
                </form>


            </div>
        </div>
    );
};

export default AddService;