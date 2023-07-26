import React from 'react';

const ShopButton = ({ title }) => {
    return (
        <div>
            <button className='bg-gradient-to-r from-blue-600 to-blue-100 text-white text-xl  font-montserrat font-semibold p-3 px-6'>{title}</button>
        </div>
    );
};

export default ShopButton;