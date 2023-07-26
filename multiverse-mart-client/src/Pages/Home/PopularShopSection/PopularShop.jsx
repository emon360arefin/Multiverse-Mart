import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/Shared/Titles/SectionTitle';
 

const PopularShop = () => {
    const [shops, setShop] = useState([])
    const [shopsCategory, setShopCategory] = useState(shops)

    useEffect(() => {
        fetch('./shop.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShop(data)
            })
    }, [])
    // data filtering for specific category
    const handleGadget = (cat) =>{
            const shopsGadgets = shops.filter(shop => shop.Brand == cat);
            setShop(shopsGadgets)
    }
    return (
        <div>
            <div className='w-[95%] mx-auto my-10'>
                <SectionTitle title={'Popular Shops'}></SectionTitle>
                <div className='py-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
                    {
                        shops?.slice(0, 8).map((shop, i) => <div key={i}>
                            <div className='bg-blue-50 rounded-md shadow-md h-[150px]'>
                                <p className='bg-blue-300 p-1 mt-4 shadow-xl rounded-lg w-1/4 m-2'>{shop.SellPercentage} %</p>
                                <h4 className='text-center font-bold text-xl my-5'>{shop.Vendor}</h4>
                            </div>
                        </div>)
                    }
                </div>
                <div className='md:flex md:justify-evenly space-y-2'>
                    <button onClick={()=>handleGadget('Microsoft')} className='bg-gradient-to-r from-blue-600 to-blue-100 text-white text-xl  font-montserrat font-semibold p-3 px-6'> Popular For Gadget  </button>
                    <button onClick={()=>handleGadget('Acer')} className='bg-gradient-to-r from-blue-600 to-blue-100 text-white text-xl  font-montserrat font-semibold p-3 px-6'> Popular For Cosmetics </button>
                     <button onClick={()=>handleGadget('HP')} className='bg-gradient-to-r from-blue-600 to-blue-100 text-white text-xl  font-montserrat font-semibold p-3 px-6'> Popular For Clothing </button>               
                </div>
            </div>
        </div>
    );
};

export default PopularShop;