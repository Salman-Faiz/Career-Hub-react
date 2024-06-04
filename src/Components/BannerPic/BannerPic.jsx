import React from 'react';

const BannerPic = () => {
    return (
        <div className='flex gap-14'>
            <div className='pt-10 ps-5'>
                <h1 className='text-6xl font-semibold '>One Step Closer To Your <br /><span className='text-violet-500'>Dream Job</span></h1>
                <p className='text-xl py-4 text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className='bg-violet-500 text-white text-3xl rounded-lg px-4 py-2'>Get Started</button>
            </div>
            <div><img src="/public/assets/images/user.png" alt="" /></div>
        </div>
    );
};

export default BannerPic;