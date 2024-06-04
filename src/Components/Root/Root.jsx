

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JobCategories from "../JobCategoris/JobCategories";



const Root = () => {
    return (
       <> <div className="container mx-auto">
  <Header></Header>
     
    <div>
    <JobCategories></JobCategories>
    <Outlet></Outlet>
    </div>
    
     </div> 
     <Footer></Footer> 
       </>
        
      
    );
};

export default Root;