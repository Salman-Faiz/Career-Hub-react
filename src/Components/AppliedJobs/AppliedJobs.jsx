import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { getStoredDataFromLS } from '../../Utility/LocalStorage';

const AppliedJobs = () => {
    // const [appliedJob, setAppliedJob] = useState([]);
    // const jobs = useLoaderData();
    // useEffect(()=>{
    //     const storedJobIds = getStoredDataFromLS();
    //     if(jobs){
    //         // const jobApplied= jobs.filter(job => storedJobIds.includes(job.id));
    //         // console.log(jobApplied)
    //         // setAppliedJob(jobApplied);
    //         const jobApplied =[];
    //         for( const id of storedJobIds){
    //             const job = jobs.find(job=> job.id === id);
    //             if(job){
    //                 jobApplied.push(job);
    //             }
    //         }
    //         console.log(jobs)
    //         setAppliedJob(jobApplied);
    //     }

        
    // },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
           {/* <h4> {appliedJob.length}</h4> */}
        </div>
    );
};

export default AppliedJobs;