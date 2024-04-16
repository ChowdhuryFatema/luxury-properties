import PropTypes from 'prop-types';
import ResidentialCard from "../ResidentialCard/ResidentialCard";
import { useState } from 'react';

const Residential = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="bg-[#EDF1F2]">
            <div className="py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="space-y-2 text-center mb-10">
                        <h2 className="text-4xl font-bold">Estate</h2>
                        <p className="w-full md:w-3/4 lg:w-1/2 mx-auto">Residential realm spans single-family homes, townhouses, apartments, student housing, senior living, and vacation rentals, catering to various living needs.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        {
                            data.slice(0, showAll ? data.length : 6).map(item => <ResidentialCard
                                key={item.id}
                                item={item}
                            ></ResidentialCard>
                            )
                        }

                    </div>
                        {
                            !showAll &&
                            <div className='my-10 flex flex-col justify-center items-center'>
                            <button onClick={() => setShowAll(!showAll)} className='btn border border-[#6BC702] text-xl font-semibold px-10 rounded-lg hover:bg-[#62a812]'>ShowAll</button>
                            </div>
                        }
                    
                </div>

            </div>
        </div>
    );
};

Residential.propTypes = {
    data: PropTypes.array.isRequired,
}
export default Residential;