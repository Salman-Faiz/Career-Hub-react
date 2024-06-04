
import BannerPic from "./Components/BannerPic/BannerPic"
import FeaturedJob from "./Components/FeaturedJob/FeaturedJob"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import JobCategoryList from "./Components/JobCategoryList/JobCategoryList"


function App() {


  return (
    <>
     <div className="container mx-auto">
     <Header></Header>
     
     <BannerPic></BannerPic>
     <JobCategoryList></JobCategoryList>
     <FeaturedJob></FeaturedJob>
    
     </div> 
     <Footer></Footer>
    </>
  )
}

export default App
