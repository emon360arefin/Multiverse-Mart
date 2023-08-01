import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { AuthContext } from '../../Authentication/AuthProvider';
// import useTitle from '../Hooks/useTitle';

const Register = () => {

    // useTitle("Login")

    // const { signInUser, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [hidden, setHidden] = useState(true)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleSubmitForm = (event) => {
        event.preventDefault()
        setError(null)

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                event.target.reset()
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGooglSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })

                const mongoGoogleUser = { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }
                fetch("https://vertex-film-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(mongoGoogleUser)
                })
                    .then(res => res.JSON())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }


    return (
        <div className='pt-24 md:pt-24 pb-12 md:pb-16 bg-theme-accent'>
            <div className='px-2 max-w-7xl mx-auto'>
                <h2 className='text-center text-slate-600 font-semibold text-4xl'>Register</h2>
                <div className=" flex flex-col md:flex-row justify-between items-center gap-8 mt-12">

                    <div className=' '>
                        <img src="/register.svg" alt="" />
                    </div>

                    <div className="rounded-md flex-shrink-0 pb-6 w-full max-w-lg shadow-md bg-white ml-auto">

                        <form onSubmit={handleSubmitForm} className="p-6 flex flex-col gap-4">


                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Enter your name"
                                    className="border px-4 py-2 rounded focus:outline-none"
                                    required />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="border px-4 py-2 rounded focus:outline-none"
                                    required />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center gap-4 border rounded pr-2'>
                                    <input
                                        type={hidden ? 'password' : 'text'}
                                        name='password'
                                        placeholder="Enter password"
                                        className=" px-4 py-2 rounded w-full focus:outline-none"
                                        required />

                                    <div onClick={() => setHidden(!hidden)}>
                                        {
                                            hidden ? <AiFillEyeInvisible className='cursor-pointer text-2xl hover:text-[#2996FF]'></AiFillEyeInvisible> :
                                                <AiFillEye className='cursor-pointer text-2xl hover:text-[#2996FF]'></AiFillEye>
                                        }
                                    </div>
                                </div>

                            </div>

                            {/* File Upload  */}
                            <div className='flex gap-4'>
                                <FaUserCircle className='text-4xl text-slate-500'></FaUserCircle>

                                <label
                                    htmlFor="file-input"
                                    className=" flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"

                                        className="sr-only"
                                    />
                                </label>
                            </div>


                            {/* Button */}
                            <div className=" mt-6">
                                <button className="bg-button-primary hover:bg-[#2580f7] text-white text-xl py-2 px-auto rounded w-full">Register</button>
                            </div>



                            {/* Already */}

                            <label className="label">
                                <h2>Already have an account? Please <span className='text-button-primary'> <Link to='/login'>Login</Link>  </span></h2>
                            </label>

                        </form>
                        <div className=' px-6 flex flex-col gap-2'>
                            <h2 className='text-center mb-4 text-xl text-slate-700'>_______ OR _______</h2>
                            <button onClick={handleGooglSignIn} className='md:py-2 py-2 md:px-8 px-4 border w-full rounded hover:shadow-md transform-all ease-in-out duration-500'> <FcGoogle className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Continue With Google</span> </button>


                            <p className='text-red-400 text-center'>{error}</p>
                            <p className='text-green-400 text-center'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;