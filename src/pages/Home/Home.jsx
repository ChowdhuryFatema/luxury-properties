
import { Helmet } from "react-helmet-async";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Residential from "./Residential/Residential";
import { useLoaderData } from "react-router-dom";
import Property from "./Property/Property";
import AboutUs from "./AboutUs/AboutUs";



const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Home | Luxury Properties</title>
            </Helmet>
            <Navbar color={'text-white'} navColor={'lg:text-white'}></Navbar>
            
            <div className="-mt-20">
                <Banner></Banner>
            </div>
            <Residential data={data}></Residential>
            <Property></Property>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;