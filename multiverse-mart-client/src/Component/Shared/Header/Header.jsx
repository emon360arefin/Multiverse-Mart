import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag, HiOutlineMenu } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";


import './Header.css'
import { useState } from 'react';

const Header = () => {

    const [open, setOpen] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    const items = [
        { "id": 1, "name": "Shop", "path": "/shop" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Contact", "path": "/contact" },
        { "id": 4, "name": "Become A Seller", "path": "/become-a-seller" }
    ]


    return (
        <div>
            {/* Mobile Responsive */}
            <div className={`md:hidden bg-white absolute w-full h-full bottom-0 z-20 py-24 pl-10 duration-500 ${open?"left-0":"left-[-100%]"}`}>
                <ul className=''>
                    {
                        items && items.map(item => <li className='cursor-pointer text-black py-7 px-3'>{item.name}</li>)
                    }
                </ul>
            </div>
            <div className='bg-[#e6f1ff] bg-opacity-50 backdrop-filter backdrop-blur-xl sticky top-0 left-0 right-0 z-20 shadow-sm '>
                <div className='w-[95%] mx-auto'>
                    <div className='flex h-20 items-center justify-between w-full gap-auto'>

                        {/* Left Column */}
                        <div className='flex gap-2 md:gap-10 items-center justify-start w-auto md:w-3/5'>

                            {/* Hamburger */}
                            <div className='text-2xl block md:hidden' onClick={()=>{setOpen(!open)}}>
                                {open?<AiOutlineClose></AiOutlineClose>:<HiOutlineMenu></HiOutlineMenu>}
                            </div>

                            <div className='w-12 md:w-64'>
                                <a href="">
                                    <img src="/Multiverse Mart Logo.png " alt="" className='w-full hidden md:block' />
                                    <img src="/favicon.png" alt="" className='w-full block md:hidden' />
                                </a>
                            </div>
                            <div className='hidden md:block '>
                                <ul className='flex gap-8 font-semibold items-center '>

                                    {
                                        items && items.map(item => <li className='cursor-pointer text-black '>{item.name}</li>)
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
    );
};

export default Header;