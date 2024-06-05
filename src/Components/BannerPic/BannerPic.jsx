import React from 'react';

const BannerPic = () => {
    return (
        
            <div className='flex gap-10 pt-20 '>
            <div className='pt-10 sm:ps-10 lg:ps-0'>
                <h1 className='text-7xl font-semibold '>One Step Closer To Your <br /><span className='text-violet-500'>Dream Job</span></h1>
                <p className='text-2xl py-4 text-slate-500 text-wrap'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className='bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-3xl rounded-lg px-4 py-2'>Get Started</button>
            </div>
            <div><img src="/public/assets/images/user.png" alt="" /></div>
        </div>
    
    );
};

export default BannerPic;