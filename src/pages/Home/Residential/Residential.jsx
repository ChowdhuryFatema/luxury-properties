import PropTypes from 'prop-types';
import { useState } from "react";
import ResidentialCard from "../ResidentialCard/ResidentialCard";


const Residential = ({data}) => {

    const [showAll, setShowAll] = useState(false);
    console.log(data)
    return (
        <div className="bg-[#EDF1F2]">
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">

                    {
                        data.slice(0, showAll ? data.length : 6).map(item => <ResidentialCard 
                            key={item.id}
                            item={item}></ResidentialCard>)
                    }
                        
                    </div>
                </div>
                {
                    showAll 
                    ? '' : <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">ShowAll</button>
                    
                }
            </div>
        </div>
    );
};

Residential.propTypes = {
    data: PropTypes.array.isRequired,
}
export default Residential;