import React from 'react';

const SectionTitle = ({title, subtile}) => {
    return (
        <div>
            <h2 className='font-montserrat font-bold md:text-4xl text-3xl text-blue-400'>{title}</h2>
        </div>
    );
};

export default SectionTitle;