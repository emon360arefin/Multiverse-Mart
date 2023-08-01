import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const NavLink = ({ category,open }) => {

    return (
        <div className='cursor-pointer text-black py-7  px-3 flex flex-col justify-center items-center gap-3 z-50 group'>
            {open?"":<img className='w-36' src={category.image} alt="" />}
            <h1 className=' font-medium'><Link>{category.name}</Link></h1>
            {
                category.subMenu && (
                    <div className='md:mt-[-10px]'>
                        <div className='absolute  hidden group-hover:md:block hover:md:block'>
                            <div className='md:py-3'>
                                <div className='w-4 h-4 left-2 absolute mt-1 bg-blue-100 rotate-45'></div>
                            </div>
                            <div className='bg-blue-100 border bottom-3 text-black grid grid-cols-4  gap-10 p-5'>
                                {
                                    category.subLinks.map((mySubLinks)=>(
                                        <div>
                                            <h1 className='text-lg font-semibold'>{mySubLinks.name}</h1>
                                            {
                                                mySubLinks.subLinks?.map(slik=>(
                                                    <div>
                                                        <li className='list-none text-gray-600 my-2.5'>
                                                            <Link to={slik.link} className='text-black hover:text-[#388DFF]'>{slik.name}</Link>
                                                        </li>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default NavLink;