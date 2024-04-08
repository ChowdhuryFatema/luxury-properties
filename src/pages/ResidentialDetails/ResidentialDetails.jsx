import { useLoaderData, useParams } from "react-router-dom";

const ResidentialDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const item = data.find(c => c.id == id);
    const {estate_title, description} = item;

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="lg:col-span-3 dark:bg-gray-50 dark:text-gray-800">
            
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;