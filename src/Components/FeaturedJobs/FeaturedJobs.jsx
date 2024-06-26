import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    // this is not recommended process to show only 4 data.. we will use pagination later.
    const [dataLength,setDataLength] = useState(4);
    useEffect(() => {
        fetch('/public/data/jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, [])
    return (
        <div>
            <div className="text-center py-10">
                <h2 className="text-5xl font-bold">Featured Job</h2>
                <p className="text-slate-500 py-6 text-xl font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    featuredJobs.slice(0,dataLength).map(featuredJob => <FeaturedJob featuredJob={featuredJob}></FeaturedJob>)
                }
            </div>
            <div className="text-center pt-6 pb-20">
               <div className={dataLength === featuredJobs.length ? 'hidden' : ''}>
               <button onClick={()=>{setDataLength(featuredJobs.length)}} className="bg-gradient-to-r from-indigo-400 to-violet-600 px-3 py-2 rounded-lg text-white text-2xl">See All Jobs</button>
               </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;