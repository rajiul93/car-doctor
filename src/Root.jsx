import { Outlet } from "react-router-dom";
import Footer from "./Share/Footer";
import Navbar from "./Share/Navbar";

 

const Root = () => {
    return (
        <div>
           <div className="mb-24">
           <Navbar />
           </div>
           <div className="px-6">

            <Outlet />
           </div>
           <Footer />
        </div>
    );
};

export default Root;