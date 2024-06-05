import { Link } from "react-router-dom";


const FeaturedJob = ({ featuredJob }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = featuredJob;
    return (



        <div className="space-y-3 border-2 rounded-lg ps-6 py-6">
            <img src={logo} alt="" />
            <h2 className="text-2xl font-semibold text-slate-600">{job_title}</h2>
            <h5 className="text-2xl text-slate-400">{company_name}</h5>
            <div className="flex text-xl gap-4 ">
                <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">{remote_or_onsite}</h3>
                <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">{job_type}</h3>
            </div>
            <div className="flex space-x-3">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p>{location}</p>
                </div>
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : {salary}</p>
                </div>
            </div>
        <div>
        <Link to={`/jobs/${id}`}>  <button className="bg-gradient-to-r from-indigo-400 to-violet-600 px-3 py-2 rounded-lg text-white font-semibold text-xl">View Details</button></Link>
        </div>
        </div>
    );
};

export default FeaturedJob;