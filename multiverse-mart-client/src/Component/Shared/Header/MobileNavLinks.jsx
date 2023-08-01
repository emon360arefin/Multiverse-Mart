import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavLinks = ({ item }) => {
    const [heading,setHeading] = useState("")
    const [subHeading,setSubHeading] = useState("")
    return (
        <div className='cursor-pointer text-black py-3 px-3 flex flex-col z-50 group'>
            <h1 className=' font-semibold text-xl' onClick={() => heading !== item.name ? setHeading(item.name) : setHeading('')}>{item.name}</h1>
            {
                item.subMenu && item?.subLinks?.map(slink => (
                    <div className={`${heading === item.name ? '' : 'hidden'}`}>
                        <h1 className='text-lg font-semibold py-4 pl-7' onClick={() => subHeading !== slink.name ? setSubHeading(slink.name) : setSubHeading('')}>{slink.name}</h1>
                        {
                            slink.subLinks?.map(slik => (
                                <div className={`${subHeading === slink.name ? '' : 'hidden'}`}>
                                    <li className='list-none text-gray-600 py-3 pl-14'>
                                        <Link to={slik.link} className='text-black hover:text-[#388DFF]'>{slik.name}</Link>
                                    </li>
                                </div>
                            ))
                        }
                    </div>
                ))
            }

        </div>
    );
};

export default MobileNavLinks;