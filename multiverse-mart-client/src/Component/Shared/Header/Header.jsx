import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag, HiOutlineMenu } from "react-icons/hi";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import signUpAnimation from './../../../assets/animation/animation_lkilhovo.json';
<<<<<<< HEAD
import Marquee from "react-fast-marquee";



=======
>>>>>>> cbf1f92c90b0646fafbb9abd26f066fdecbd96d0
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import MobileNavLinks from './MobileNavLinks';

const Header = () => {
    const [open, setOpen] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    const items = [
        { "id": 1, "name": "Shop", "path": "/shop" },
        { "id": 2, "name": "Product", "path": "/product" },
        { "id": 3, "name": "Become A Seller", "path": "/become-a-seller" }
    ];
    const categories = [
        {
            "id": 1, "name": "Men", "subMenu": true, "image": "https://i.ibb.co/tXhy1t6/men.png", "subLinks": [
                {
                    "mid": 1, "name": "TopWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "BottomWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "SleepWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
            ]
        },
        {
            "id": 2, "name": "Women","subMenu": true, "image": "https://i.ibb.co/t3G1PqM/women.png", "subLinks": [
                {
                    "mid": 1, "name": "TopWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "BottomWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "SleepWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
            ]
        },
        {
            "id": 3, "name": "Kids","subMenu": true, "image": "https://i.ibb.co/0fTpDqJ/kids.png", "subLinks": [
                {
                    "mid": 1, "name": "TopWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "BottomWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "SleepWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
            ]
        },
        {
            "id": 4, "name": "Gadgets","subMenu": true, "image": "https://i.ibb.co/vYwvFz2/gadget.png", "subLinks": [
                {
                    "mid": 1, "name": "TopWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "BottomWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "SleepWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
            ]
        },
        {
            "id": 5, "name": "Beauty", "subMenu": true, "image": "https://i.ibb.co/TYYhpbf/makeup.png", "subLinks": [
                {
                    "mid": 1, "name": "TopWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "BottomWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "SleepWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
                {
                    "mid": 2, "name": "InnerWear", "subLinks": [
                        {
                            "topid": 1, "name": "T-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Casual-Shirts", "link": "/"
                        },
                        {
                            "topid": 2, "name": "Formal-Shirts", "link": "/"
                        },
                    ]
                },
            ]
        },
    ]

    function handleClose(e) {
        if (e.target.id === "wrapper") {
            console.log("Button Clicked");
            setOpen(!open)
        }
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <div className='sticky top-0 right-0 left-0 z-40'>
            {/* First part of header */}
<<<<<<< HEAD
            <div className={`${open ? 'overlay overflow-y-auto' : ""}`} onClick={handleClose} id="wrapper">
=======
            <div className={`  ${open ? 'overlay' : ""}`} onClick={handleClose} id="wrapper">
>>>>>>> cbf1f92c90b0646fafbb9abd26f066fdecbd96d0
                {/* Mobile Responsive */}
                <div className={`md:hidden bg-white absolute max-w-[70%] max-h-screen bottom-0 z-30 py-24  pl-10  duration-500 border-r-2 border-b-2 ${open ? "left-0" : "left-[-100%]"}`} >
                    <div className='flex justify-between items-center gap-5'>
                        <Lottie animationData={signUpAnimation} className='w-28' loop={true} />
                        <div>
                            <p className='w-[80%] mx-auto'>To get more offer please
                                <Link><button type="button" className='ml-[3px] cursor-pointer text-blue-700 font-semibold'>Login/SignUp</button></Link>
                            </p>
                        </div>
                    </div>
                    <ul className=''>
                        {
                            categories && categories.map(item => <MobileNavLinks className='cursor-pointer text-black' item={item} open={open} setOpen={setOpen} key={item.id}></MobileNavLinks>)
                        }
                    </ul>
                    <ul className=''>
                        {
                            items && items.map(item => <MobileNavLinks className='cursor-pointer text-black' item={item} key={item.id}>
                            </MobileNavLinks>)
                        }
                    </ul>
                </div>
                <div className={`bg-[#e6f1ff] bg-opacity-50 backdrop-filter backdrop-blur-xl sticky top-0 left-0 right-0 z-30  shadow-sm `}>
                    <div className='w-[95%] mx-auto'>
                        <div className='flex h-20 items-center justify-between w-full gap-auto'>

                            {/* Left Column */}
                            <div className='flex gap-2 md:gap-10 items-center justify-between w-auto md:w-3/5'>

                                {/* Hamburger */}
                                <div className='text-2xl block md:hidden' onClick={() => { setOpen(!open) }}>
                                    {open ? <AiOutlineClose></AiOutlineClose> : <HiOutlineMenu></HiOutlineMenu>}
                                </div>
                                <div className='w-12 md:w-64 flex justify-center items-center'>
                                    <a href="" className=''>
                                        <img src="/logo-blue.png" alt="" className=' h-[45px] hidden md:block' />
                                        <img src="/favicon.png" alt="" className='w-full block md:hidden' />
                                    </a>
                                </div>
                                <div className='hidden md:block '>
                                    <ul className='flex gap-6 items-center '>
                                        {
                                            items && items.map(item => <li className='cursor-pointer text-black py-7 ' key={item.id}>{item.name}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className='flex  justify-end items-center gap-5  relative  w-full md:w-2/5 ml-3'>

                                {/* Form For Desktop*/}
                                <form className={`hidden md:flex justify-center items-center  border bg-white overflow-hidden rounded-md cursor-pointer absolute md:static left-0 transition-all ease-in-out  duration-700 ${onFocus ? "right-0" : ""}`}>

                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        onFocus={() => setOnFocus(true)}
                                        onBlur={() => setOnFocus(false)}
                                        className={` h-[45px] pl-6 max-w-md border-r  font-normal rounded-l-md transition-all ease-in-out  duration-700  ${onFocus ? "outline-0 w-full md:w-[400px]  " : "w-[150px]"}`} />

                                    {/* Search Icon */}
                                    <button

                                        className='w-12 h-[45px] flex justify-center hover:bg-button-primary'>
                                        <HiMagnifyingGlass className='h-full w-full hover:text-white text-xl px-3 '></HiMagnifyingGlass>
                                    </button>
                                </form>

                                {/* Form For Mobile */}
                                <form className={`flex justify-start items-center border bg-white overflow-hidden rounded-md cursor-pointer absolute md:static left-0 transition-all ease-in-out duration-700 md:hidden ${onFocus ? "right-0 w-full" : "w-[118px]"}`}>

                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        onFocus={() => setOnFocus(true)}
                                        onBlur={() => setOnFocus(false)}
                                        className={` h-[45px] pl-6 max-w-xs border-r  font-normal rounded-l-md transition-all ease-in-out  duration-700 ${onFocus ? "outline-0 w-full md:w-[600px] " : "w-[70px]"}`} />

                                    {/* Search Icon */}
                                    <button

                                        className='w-12 h-[45px] flex justify-center hover:bg-button-primary '>
                                        <HiMagnifyingGlass className='h-full w-full hover:text-white text-xl px-3 '></HiMagnifyingGlass>
                                    </button>
                                </form>


                                <div className='flex gap-5 icon-title justify-center items-center text-xl mt-2 cursor-pointer '>
                                    <div className='flex flex-col justify-center items-center icon-title hover:text-button-primary'>
                                        <FaRegUser className=''></FaRegUser>
                                        <h6 className='text-[11px]'>Profile</h6>
                                    </div>
                                    <div className='flex flex-col justify-center items-center hover:text-button-primary'>
                                        <FaRegHeart></FaRegHeart>
                                        <h6 className='text-[11px]'>Wishlist</h6>
                                    </div>
                                    <div className='flex flex-col justify-center items-center hover:text-button-primary'>
                                        <HiOutlineShoppingBag></HiOutlineShoppingBag>
                                        <h6 className='text-[11px]'>Bag</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second part of header(Category menu)*/}
            <div className='w-[95%] mx-auto flex justify-between items-center overflow-x-scroll'>
                {
                    categories.map(category => <NavLink category={category} key={category.id}></NavLink>)
                }
            </div>
        </div>
    );
};

export default Header;