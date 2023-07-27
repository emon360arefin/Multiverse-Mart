import React, { useEffect, useState } from 'react';
import VerticalTabs from './VerticalTabs';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';

const CategorySection = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://ecommerce-server-flame.vercel.app/laptop')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const categoryList = [];

    products.map(product => categoryList.push(product.Category))

    const filteredArray = categoryList.filter((item, index) => categoryList.indexOf(item) === index);


    // Generating Two Dimensional Array
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.Category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    // Convert the object values (grouped products) to a two-dimensional array
    const groupedArray = Object.values(groupedProducts);

    console.log("Group Array", groupedArray);


    return (
        <div className='py-16 md:py-20 bg-white'>
            <div className='max-w-[95%] mx-auto  '>

                <Tabs>
                    <TabList>
                        {
                            filteredArray && filteredArray.map((tabItem, index) => <Tab key={index}>{tabItem}</Tab>)
                        }
                    </TabList>

                    <div>
                        {
                            groupedArray &&
                            groupedArray.map((singleCategory, index) => {
                                return (
                                    <TabPanel key={index}>
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                                            {singleCategory &&
                                                singleCategory.map((singleProduct, index) => (
                                                    <TabCard singleProduct={singleProduct} key={index}></TabCard>
                                                ))}
                                        </div>
                                    </TabPanel>
                                );
                            })
                        }
                    </div>


                </Tabs>

            </div>

        </div>
    );
};

export default CategorySection;