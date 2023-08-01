import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/Shared/Titles/SectionTitle';

const TrendingHome = () => {
    const [shops, setShop] = useState([])
    // const [shopsCategory, setShopCategory] = useState(shops)

    useEffect(() => {
        fetch('./shop.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setShop(data)
            })
    }, [])
    const colStyle = [
        'col-span-1 bg-blue-100',
        'col-span-2 bg-blue-50 flex p-3',
        'col-span-1 bg-blue-100',
        'col-span-2 bg-blue-100 flex p-3',
        'col-span-1 bg-blue-100',
        'col-span-1 bg-blue-50',
        'col-span-2 bg-blue-50 flex p-3',
        'col-span-2 bg-blue-100 flex p-3',
    ]
    console.log(shops)
    return (
        <div className='w-[95%] mx-auto my-10 shadow-md'>
            <SectionTitle title={'Trending Now'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 md:p-8'>
                {
                    // signle card show

                    shops?.slice(0, 8).map((shop, i) => <div key={i} className={`${colStyle[i]} shadow-lg md:h-[450px]`}>

                        <img src={shop.Image} alt="" className='w-[300px] h-[300px]'/>
                        <div className='md:p-5 text-center'>
                            <h2 className='font-bold'>{shop.Name}</h2>
                            <p>Price: ${shop.Price}</p>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default TrendingHome;