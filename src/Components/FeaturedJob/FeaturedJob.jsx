

const FeaturedJob = () => {
    return (
        <div className="">
            <div className="text-center py-10">
            <h2 className="text-5xl font-bold">Featured Job</h2>
            <p className="text-slate-500 py-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           <div className="grid md:grid-cols-2 gap-5 px-28">
           <div className="space-y-3 border-2 rounded-lg ps-6 py-6">
                <img src="/public/assets/logo/google.png" alt="" />
                <h2 className="text-2xl font-semibold text-slate-600">Technical Database Engineer</h2>
                <h5 className="text-2xl text-slate-400">Google LLC</h5>
                <div className="flex text-xl gap-4 ">
                    <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">Remote</h3>
                    <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">Full Time</h3>
                </div>
                <div className="flex space-x-3">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : 100k-150k</p>
                </div>
                </div>
                <button className="bg-violet-500 rounded-lg px-3 py-2 text-white text-2xl">View details</button>
            </div>
            <div className="space-y-3 border-2 rounded-lg ps-6 py-6">
                <img src="/public/assets/logo/netflix.png" alt="" />
                <h2 className="text-2xl font-semibold text-slate-600">Senior Product Designer</h2>
                <h5 className="text-2xl text-slate-400">Netflix</h5>
                <div className="flex text-xl gap-4 ">
                    <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">Remote</h3>
                    <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">Full Time</h3>
                </div>
                <div className="flex space-x-3">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : 100k-150k</p>
                </div>
                </div>
                <button className="bg-violet-500 rounded-lg px-3 py-2 text-white text-2xl">View details</button>
            </div>
            <div className="space-y-3 border-2 rounded-lg ps-6 py-6">
                <img src="/public/assets/logo/tesla.png" alt="" />
                <h2 className="text-2xl font-semibold text-slate-600">Software Engineer</h2>
                <h5 className="text-2xl text-slate-400">Tesla</h5>
                <div className="flex text-xl gap-4 ">
                    <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">Onsite</h3>
                    <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">Full Time</h3>
                </div>
                
                <div className="flex space-x-3 flex-grow">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : 100k-150k</p>
                </div>
                </div>
                <button className="bg-violet-500 rounded-lg px-3 py-2 text-white text-2xl">View details</button>
              
            </div>

            <div className="space-y-3 border-2 rounded-lg ps-6 py-6 ">
                <img src="/public/assets/logo/airbnb.png" alt="" />
                <h2 className="text-2xl font-semibold text-slate-600">Manager</h2>
                <h5 className="text-2xl text-slate-400">Airbnb</h5>
                <div className="flex text-xl gap-4 ">
                    <h3 className="border-2 border-violet-400 px-3 rounded-lg py-2 text-xl">Onsite</h3>
                    <h3 className="border-2  border-violet-400  px-3 rounded-lg py-2 text-xl">Full Time</h3>
                </div>
                <div className="flex space-x-3">
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/location2.png" alt="" />
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex space-x-1">
                    <img src="/public/assets/icons/money.png" alt="" />
                    <p>Salary : 100k-150k</p>
                </div>
                </div>
                <button className="bg-violet-500 rounded-lg px-3 py-2 text-white text-2xl">View details</button>
            </div>
           </div>
          <div className="text-center py-6">
          <button className="bg-violet-500 px-3 py-2 rounded-lg text-white text-2xl">See All Jobs</button>
          </div>
            
        </div>
    );
};

export default FeaturedJob;