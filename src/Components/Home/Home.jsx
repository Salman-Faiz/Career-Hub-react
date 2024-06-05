import BannerPic from "../BannerPic/BannerPic";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategoris/JobCategories";
import Header from "../Header/Header"



const Home = () => {
    return (
        <div >
            <div className=" bg-violet-50">
                <div className="max-w-7xl mx-auto">
                    <Header></Header>
                    <BannerPic></BannerPic>
                </div>

            </div>
            <div className="max-w-7xl mx-auto">
                <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
            </div>
            
        </div>


    );
};

export default Home;