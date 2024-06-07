

const AppliedJob = ({appliedJob}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob;
    return (
        <div className="flex justify-between border border-gray-400 px-6">
           <div className="">
           <img className="justify-center align-middle" src={logo} alt="" />
           </div>
           <div>
           <h2>{job_title}</h2>
           <h2>{company_name}</h2>
           <h4>{remote_or_onsite}</h4>
           <h4>{job_type}</h4>
           <p>{location}</p>
           <p>{salary}</p>
           </div>
           <button>view details</button>
        </div>
    );
};

export default AppliedJob;