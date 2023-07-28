import React, { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';

const TabCard = (props) => {
    const { singleProduct } = props;
    const { _id, Name, Image, Price, IsOnSell, SellPercentage, Color, Size } = singleProduct
    const [hover, setHover] = useState(false)

    console.log("single", singleProduct);
    return (
        <div className=' bg-white rounded-md shadow w-full'>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`h-56 flex justify-center overflow-hidden border rounded-t-md relative cursor-pointer`}>

                <img className={` transition-all ease-in-out duration-700 ${hover ? 'scale-[115%]' : ' scale-[105%]'}`} src={hover ? Image[1] : Image[0]} alt="" />

                <div className={`absolute flex flex-col gap-4 h-full w-[115%] bg-transparent hover:bg-[#8e8e8e3b] p-4 items-end transition-all ease-in-out duration-500 ${hover ? 'top-0 right-0' : ' top-0 -right-16'}`}>

                    <div className='p-3 text-black hover:text-white  rounded-full bg-white hover:bg-black shadow-md w-10 h-10 flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer'>
                        <BsFillCartPlusFill ></BsFillCartPlusFill>
                    </div>

                    <div className='p-3 text-black hover:text-white  rounded-full bg-white hover:bg-black shadow-md w-10 h-10 flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer'>
                        <MdFavorite ></MdFavorite>
                    </div>

                    <div className='p-3 text-black hover:text-white  rounded-full bg-white hover:bg-black shadow-md w-10 h-10 flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer'>
                        <BsFillCartPlusFill ></BsFillCartPlusFill>
                    </div>
                </div>



            </div>

            <div className='p-4 md:p-6'>
                <h2 className='font-semibold'>{Name}</h2>
            </div>

        </div>
    );
};

export default TabCard;