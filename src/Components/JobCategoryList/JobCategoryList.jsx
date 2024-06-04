import React from 'react';

const JobCategoryList = ({ job }) => {
    const { logo, id, category_name, availability } = job;
    return (
        <div className='ps-10 py-6 bg-slate-200 rounded-lg'>
            <img src={logo} alt="" />
            <h1 className='text-2xl font-bold py-2'>{category_name}</h1>
            <p className='text-slate-500'>{availability}</p>
        </div>
    );
};

export default JobCategoryList;