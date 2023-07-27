import React from 'react';

const TabCard = (props) => {
    const { singleProduct } = props;
    const { _id, Name, Image, Price, IsOnSell, SellPercentage, Color, Size } = singleProduct

    console.log("single", singleProduct);
    return (
        <div className=' bg-white rounded-md shadow w-full'>
            <div className=' h-56 flex justify-center overflow-hidden border rounded-t-md'>
                <img className='scale-[105%]' src={Image} alt="" />
            </div>

            <div className='p-4 md:p-6'>
                <h2>{Name}</h2>
            </div>

        </div>
    );
};

export default TabCard;