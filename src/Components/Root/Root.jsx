

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";






const Root = () => {
    return (
        <>
            <div >

                <Outlet></Outlet>
            </div>


            <Footer></Footer>
        </>


    );
};

export default Root;