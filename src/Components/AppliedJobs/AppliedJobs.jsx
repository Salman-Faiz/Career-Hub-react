
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { getStoredDataFromLS } from '../../Utility/LocalStorage';
import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const storedIds = getStoredDataFromLS();
        const jobApplied = jobs.filter(job => storedIds.includes(job.id));
        setAppliedJobs(jobApplied);
        console.log(jobs, storedIds, jobApplied);
        console.log(appliedJobs.length);
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
        
       <div className=''>
       {
            appliedJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob}></AppliedJob> )
        }
       </div>
        </div>
    );
};

export default AppliedJobs;