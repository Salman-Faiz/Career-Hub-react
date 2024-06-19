import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import JobCategoryList from "../JobCategoryList/JobCategoryList";


const JobCategories = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/public/data/categories.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className='pt-10'>
           
                <div className='text-center space-y-3'>
                    <h2 className=' text-5xl font-bold'>Job Category list</h2>
                    <p className='text-slate-600 pt-6 text-xl font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div  className='py-10 grid md:grid-cols-4 gap-5 '>
                    {
                    jobs.map((job,idx) => <JobCategoryList key={idx} job={job}></JobCategoryList>)
                }
                </div>
                
           
        </div>
    );
};

export default JobCategories;