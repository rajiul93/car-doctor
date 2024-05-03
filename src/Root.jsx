import { Outlet } from "react-router-dom";
import Navbar from "./Share/Navbar";

 

const Root = () => {
    return (
        <div>
           <div className="mb-24">
           <Navbar />
           </div>
            <Outlet />
        </div>
    );
};

export default Root;