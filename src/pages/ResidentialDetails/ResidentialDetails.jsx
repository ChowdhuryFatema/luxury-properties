import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

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
        <div className="max-w-7xl mx-auto px-5">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-3 dark:bg-gray-50 dark:text-gray-800">

                    <div className="space-y-4">
                        <div className="flex flex-col bg-white shadow-lg dark:bg-gray-50">
                            <div className='relative'>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image_url} />
                                <button className='py-1 px-3 font-semibold text-white rounded-md bg-[#6BC702] absolute top-5 left-5'>{status}</button>
                            </div>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>


                                <div className='space-y-3'>
                                    <h3 className="flex-1 leading-snug text-2xl">{estate_title}</h3>


                                    <p>{description}</p>
                                    <p className='text-[#949494]'>{segment_name}, {area}</p>
                                    <p>
                                        <span className='text-red-500 text-3xl'>{price.split('/')[0]}</span>
                                        {price.split('/')[1] && ' /'}
                                        <span className='text-[#949494]'>{price.split('/')[1]}</span>
                                    </p>
                                    <ul className='ml-5'>
                                        {facilities.map((facility, idx) => <li className='list-decimal text-[#949494]' key={idx}>{facility}</li>)}
                                    </ul>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                        <span>{location}</span>
                                        <span>Area : {area}</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h2>sidebar</h2>
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;