import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user-reviews/${user?.uid}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.status === 401 || response.status === 403) {
                    logOut();
                    toast.error('Token Invalid! Login Again')
                }
                return response.json();
            })
            .then((actualData) => {
                setReviewData(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [user?.uid, loading, logOut]);

    
    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setLoading(true);
                    toast.success("Review Deleted Successfully");
                }
            })
            .catch(er => {
                toast.error("Review Not Deleted");
            });
    }


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Ratting</th>
                            <th>Acction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewData &&
                            reviewData?.map((reviews, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{reviews?.service_name}</td>
                                    <td>{reviews?.rating_value}</td>
                                    <td>
                                        <button onClick={() => handleDelete(reviews._id)} className='btn btn-primary'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyReviews;