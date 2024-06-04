import React from 'react';

const JobCategoryList = () => {
    return (
        <div className='pt-10'>
            <div className='text-center space-y-3'>
                <h2 className=' text-4xl font-semibold'>Job Category list</h2>
                <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='py-10 grid grid-cols-4 gap-5 px-28'>
            <div className='ps-10 py-6 bg-slate-200 rounded-lg'>
                <img src="/public/assets/icons/accounts.png" alt="" />
                <h1 className='font-bold py-2'>Account & finance</h1>
                <p>300 jobs Available</p>
            </div>
            <div className='ps-10 py-6 bg-slate-200 rounded-lg'>
                <img src="/public/assets/icons/creative.png" alt="" />
                <h1 className='font-bold py-2'>Account & finance</h1>
                <p>300 jobs Available</p>
            </div>
            <div className='ps-10 py-6 bg-slate-200 rounded-lg'>
                <img src="/public/assets/icons/marketing.png" alt="" />
                <h1 className='font-bold py-2'>Account & finance</h1>
                <p>300 jobs Available</p>
            </div>
            <div className='ps-10  py-6 bg-slate-200 rounded-lg'>
                <img src="/public/assets/icons/chip.png" alt="" />
                <h1 className='font-bold py-2'>Account & finance</h1>
                <p>300 jobs Available</p>
            </div>
            </div>
        </div>
    );
};

export default JobCategoryList;