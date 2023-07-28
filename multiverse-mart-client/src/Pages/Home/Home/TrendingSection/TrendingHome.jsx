import React, { useEffect, useState } from 'react';

const TrendingHome = () => {
    const [shops, setShop] = useState([])
    // const [shopsCategory, setShopCategory] = useState(shops)

    useEffect(() => {
        fetch('./shop.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShop(data)
            })
    }, [])
    return (
        <div>
            <div className='grid grid-cols'>

            </div>
        </div>
    );
};

export default TrendingHome;