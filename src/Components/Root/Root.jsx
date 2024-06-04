

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Root = () => {
    return (
       <> <div className="container mx-auto">
  <Header></Header>
     
    <div>
    
    <Outlet></Outlet>
    </div>
    
     </div> 
     <Footer></Footer> 
       </>
        
      
    );
};

export default Root;