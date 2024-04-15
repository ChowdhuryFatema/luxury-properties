import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Root = () => {
    return (
        <div>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;