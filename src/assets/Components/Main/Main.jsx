import { Outlet } from "react-router-dom";
import Navbar from "../Sheared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;