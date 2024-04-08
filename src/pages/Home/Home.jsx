
import Residential from "./Residential/Residential";
import {useLoaderData} from "react-router-dom";
  


const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <h2>This is Home</h2>
            <Residential data={data}></Residential>
        </div>
    );
};

export default Home;