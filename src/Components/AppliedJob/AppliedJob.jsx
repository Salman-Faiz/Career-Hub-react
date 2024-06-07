

const AppliedJob = ({appliedJob}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob;
    return (
        <div className="flex gap-10 border border-gray-400 p-6 mb-5 rounded-xl">
           <div className=" w-44 bg-violet-200 rounded-lg">
           <div className="px-8 py-20">
           <img className="" src={logo} alt="" />
           </div>
           </div>
           <div className="flex-grow space-y-4">
           <h2 className="text-2xl font-semibold text-slate-600">{job_title}</h2>
           <h5 className="text-2xl text-slate-400">{company_name}</h5>
           <div className="flex text-xl gap-4 font-semibold">
                <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">{remote_or_onsite}</h3>
                <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">{job_type}</h3>
            </div>
            <div className="flex space-x-3 text-xl">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p className="font-bold">{location}</p>
                </div>
                <div className="flex space-x-1 text-xl">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : <span className="font-bold">{salary}</span></p>
                </div>
            </div>
           </div>
           <div className="my-auto">
           <button className="bg-gradient-to-r from-indigo-400 to-violet-600 px-3 py-2 rounded-lg text-white font-semibold text-xl">View Details</button>
           </div>
        </div>
    );
};

export default AppliedJob;