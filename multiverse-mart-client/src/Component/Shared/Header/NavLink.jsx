import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ category }) => {



    return (
        <div className='cursor-pointer text-black py-7 px-3 flex flex-col justify-center items-center gap-3'>
            <div className='w-36 h-full'>
                <img className='object-cover object-top w-full h-full ' src={category.image} alt="" />
            </div>
            <h1 className=' font-medium'><Link>{category.name}</Link></h1>
        </div>
    );
};

export default NavLink;