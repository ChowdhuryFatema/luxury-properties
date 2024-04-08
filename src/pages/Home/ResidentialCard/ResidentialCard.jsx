import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ResidentialCard = ({ item }) => {
    const {
        id,
        area,
        price,
        status,
        location,
        image_url,
        button_text,
        segment_name,
        estate_title,
    } = item;

    return (
        <div className="md:w-96 flex flex-col bg-white shadow-lg dark:bg-gray-50">
            <div className='relative'>
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image_url} />
                <button className='py-1 px-3 font-semibold text-white rounded-md bg-[#6BC702] absolute top-5 left-5'>{status}</button>
            </div>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>


                <div className='space-y-3'>
                    <h3 className="flex-1 leading-snug text-xl md:text-2xl">{estate_title}</h3>

                    <div className='flex justify-between gap-2 items-end'>
                        <p>
                            <span className='text-red-500 text-2xl md:text-3xl'>{price.split('/')[0]}</span>
                            {price.split('/')[1] && ' /'}
                            <span className='text-[#949494]'>{price.split('/')[1]}</span>
                        </p>
                        <p className='text-[#949494]'>{segment_name}</p>
                    </div>


                    <div className="flex flex-wrap justify-between text-sm md:text-xs pt-3 gap-1 dark:text-gray-600">
                        <span>{location}</span>
                        <span>Area : {area}</span>
                    </div>
                    <div className='pt-3'>
                        <Link to={`/residential/${id}`} className='btn rounded-none bg-[#6BC702] text-lg font-semibold text-white hover:bg-[#6cb617]'>{button_text}</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

ResidentialCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default ResidentialCard;