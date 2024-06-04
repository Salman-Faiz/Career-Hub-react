import BannerPic from "../BannerPic/BannerPic";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategoryList from "../JobCategoryList/JobCategoryList";


const Home = () => {
    return (
        <div>
            <BannerPic></BannerPic>
            <JobCategoryList></JobCategoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;