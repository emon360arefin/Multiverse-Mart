import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ category }) => {


    return (
        <div className='cursor-pointer text-black py-7 px-3 flex flex-col justify-center items-center gap-3'>
            <img className='object-cover w-28' src={category.image} alt="" />
            <h1 className=' font-medium'><Link>{category.name}</Link></h1>
        </div>
    );
};

export default NavLink;