
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { getStoredDataFromLS } from '../../Utility/LocalStorage';
import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';


const AppliedJobs = () => {
    // all data remain in appliedJobs
    const [appliedJobs, setAppliedJobs] = useState([]);
    // this is anothe state for filtering... filter by all,remote,onsite
    const [displayJobs,setDisplayJobs] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const storedIds = getStoredDataFromLS();
        const jobApplied = jobs.filter(job => storedIds.includes(job.id));
        setAppliedJobs(jobApplied);
        setDisplayJobs(jobApplied);
        // console.log(jobs, storedIds, jobApplied);
        // console.log(appliedJobs.length);
    }, [jobs])
    const handleDisplayJobs =(filter)=>{

        if(filter === 'All'){
            setDisplayJobs(appliedJobs);
        }
        else if( filter === 'Remote'){

            const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJObs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJObs);
        }



    }
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <div className='text-right py-2'>
                <details className="dropdown">
                    <summary className="m-1 btn bg-red-300 text-gray-600 font-bold text-2xl">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-violet-100 rounded-box w-52 text-xl">
                        <li onClick={()=>handleDisplayJobs('All')}><a>All</a></li>
                        <li onClick={()=>handleDisplayJobs('Remote')}><a>Remote</a></li>
                        <li onClick={()=>handleDisplayJobs('Onsite')} ><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div className=''>
                {
                    displayJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;