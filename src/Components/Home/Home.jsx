import BannerPic from "../BannerPic/BannerPic";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategoris/JobCategories";

import JobCategoryList from "../JobCategoryList/JobCategoryList";


const Home = () => {
    return (
        <div>
            <BannerPic></BannerPic>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;