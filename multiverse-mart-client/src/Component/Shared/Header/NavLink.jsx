import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ category }) => {
    


return (
    <div className='cursor-pointer text-black py-7 px-3'>
        <h1><Link>{category.name}</Link></h1>
        <img src={category.image} alt="" />
    </div>
);
};

export default NavLink;