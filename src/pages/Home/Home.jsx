
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Residential from "./Residential/Residential";
import {useLoaderData} from "react-router-dom";
  


const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Navbar color={'text-white'}></Navbar>
           <div className="relative -top-[84px] left-0">
           <Banner></Banner>
           </div>
            <Residential data={data}></Residential>
        </div>
    );
};

export default Home;