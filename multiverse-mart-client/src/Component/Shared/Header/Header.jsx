import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import './Header.css'

const Header = () => {
    return (
        <div className='bg-[#C0DBFF] bg-opacity-50 backdrop-filter backdrop-blur-xl'>
            <div className='w-[95%] mx-auto'>
                <div className='flex py-8 items-center justify-between w-full gap-24'>
                    <div className='flex gap-10 items-center justify-between'>
                        <div className='text-3xl font-black'>
                            <h4>Multiverse Mart</h4>
                        </div>
                        <div>
                            <ul className='flex gap-8 font-semibold items-center'>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Become a Seller</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex  justify-center items-center gap-5 '>
                        <div className='flex relative font-semibold justify-center items-center '>
                            <div className='magnifyinglass absolute top-4 left-7 text-xl'>
                                <HiMagnifyingGlass></HiMagnifyingGlass>
                            </div>
                            <input type="text" placeholder="Type here" className="w-[600px] h-[55px] pl-20 rounded-xl max-w-xs" />
                        </div>
                        <div className='flex gap-5 icon-title justify-center items-center text-xl mt-3'>
                            <div className='flex flex-col justify-center items-center icon-title'>
                                <FaRegUser></FaRegUser>
                                <h6 className='text-[13px]'>Profile</h6>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                                <h6 className='text-[13px]'>Wishlist</h6>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <HiOutlineShoppingBag></HiOutlineShoppingBag>
                                <h6 className='text-[13px]'>Bag</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;