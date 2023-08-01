import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Login = () => {



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



    return (
        <div className='pt-24 md:pt-24 pb-12 md:pb-16 bg-theme-accent'>
            <div className='px-2 max-w-7xl mx-auto'>
                <h2 className='text-center text-slate-600 font-semibold text-4xl'>Login</h2>
                <div className=" flex flex-col md:flex-row justify-between items-center gap-2 mt-12">
                    <div className=' w-full '>
                        <img className='w-full h-full' src="/login3.svg" alt="" />
                    </div>
                    <div className="rounded-md flex-shrink-0 pb-6 w-full  max-w-lg shadow-md bg-white border border-slate-100 mt-4 md:mt-0">

                        <form onSubmit={handleSubmitForm} className="p-6 flex flex-col gap-4">

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



                            {/* Button */}
                            <div className=" mt-4">
                                <button className="bg-button-primary hover:bg-[#2580f7] text-white text-xl py-2 px-auto rounded w-full transition-colors ease-in-out duration-300">Login</button>
                            </div>

                            {/* Remember + Forget */}



                            {/* Already */}

                            <label className="label">
                                <h2>New on Multiverse Mart? Please <span className='text-button-primary'> <Link to='/register'>Register</Link>  </span></h2>
                            </label>

                        </form>
                        <div className=' px-6 flex flex-col gap-2'>
                            <h2 className='text-center mb-4 text-xl text-slate-700'>_______ OR _______</h2>
                            <button className='md:py-2 py-2 md:px-8 px-4 border w-full rounded hover:shadow-md transform-all ease-in-out duration-500'> <FcGoogle className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Login With Google</span> </button>


                            <p className='text-red-400 text-center'>{error}</p>
                            <p className='text-green-400 text-center'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;