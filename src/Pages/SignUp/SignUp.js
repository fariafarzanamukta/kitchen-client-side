import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const { googleSignIn, createUser, updateUser, setLoading, loading } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    uid: user.uid
                }
                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        toast.success('Successfully Sign In with Google');
                        navigate(from, { replace: true });
                    })
                    .catch(err => console.log(err))
            })
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                const currentUser = {
                    uid: user.uid
                }
                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        handleUpdateUser(name, email);
                        toast.success('Successfully Log in')
                        navigate(from, { replace: true });
                    })
            })
    }
    const handleUpdateUser = (name, email) => {
        const userInfo = {
            displayName: name,
            email
        }
        updateUser(userInfo)
            .then(() => {
                setLoading(false);
                toast.success('User Update');
            })
            .catch(err => console.log(err))

    }
    return (
        <div>

            <div className='bg-base-200'>
                <h1 className="text-3xl md:text-5xl font-bold pb-0 pt-10 text-center">Sign Up</h1>
                <div className="hero max-w-screen-xl mx-auto ">

                    <div className="hero-content w-full mx-auto">

                        <div className="card w-[50%] shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUp} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <h1>Have An Account ? <span className='text-violet-500 font-semibold'> <Link to='/login'>Click to Login</Link> </span> </h1>
                                    </label>
                                </div>
                                {/* {
                                error && <p className='text-red-600'> {error}</p>
                            } */}

                                <div className="form-control mb-0">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <div className="divider mx-6 mt-0">OR</div>

                            <button
                                onClick={handleGoogleSignIn}
                                className="btn w-[80%] mx-auto mb-10"><FaGoogle className='mr-2 text-2xl' >
                                </FaGoogle>Google Signin
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;