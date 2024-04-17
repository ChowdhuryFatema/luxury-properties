import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import SideBar from "./SideBar";
import MyMap from "./MyMap";

const ResidentialDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const item = data.find(c => c.id == id);

    const {
        area,
        price,
        status,
        location,
        image_url,
        facilities,
        description,
        segment_name,
        estate_title,
    } = item;

    return (
        <div>
            <Helmet>
                <title>property Details | Luxury Properties</title>
            </Helmet>
            <div className="shadow-lg bg-white w-full">
                <div className="max-w-7xl mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-4 gap-5 my-10 md:my-16">
                <div className="lg:col-span-3 dark:bg-gray-50 dark:text-gray-800">

                    <div className="space-y-4">
                        <div className="flex flex-col bg-white shadow-lg dark:bg-gray-50">
                            <div className='relative'>
                                <img alt="" className="object-cover w-full md:h-96 dark:bg-gray-500" src={image_url} />
                                <button className='py-2 px-4 font-semibold text-white rounded-md bg-[#6BC702] absolute top-5 left-5 text-lg'>{status}</button>
                            </div>
                            <div className="flex flex-col flex-1 p-4 md:p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>


                                <div className='space-y-3'>

                                    <h3 className="flex-1 leading-snug text-2xl">{estate_title}</h3>

                                    <p className="pb-3">{description}</p>


                                    <hr />


                                    <div className="md:flex justify-between pt-3">

                                        <div className="space-y-2">
                                            <p>
                                                <span className='text-red-500 text-3xl'>{price.split('/')[0]}</span>
                                                {price.split('/')[1] && ' /'}
                                                <span className='text-[#949494]'>{price.split('/')[1]}</span>
                                            </p>
                                            <div className="flex flex-wrap justify-between text-xs dark:text-gray-600">
                                                <span>{location}</span>
                                                <span>Area : {area}</span>
                                            </div>
                                            <p className='text-[#949494]'>{segment_name}, {area}</p>

                                        </div>


                                        <ul className="space-y-1 mt-5 ml-5 md:mt-0 md:ml-0">
                                            {facilities.map((facility, idx) => <li className='list-decimal text-[#949494]' key={idx}>{facility}</li>)}
                                        </ul>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <MyMap></MyMap>
                </div>


                <div>
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;