import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.png';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='w-full'>
             <Helmet>
                <title>Page Not Found | Luxury Properties</title>
            </Helmet>
            <div className='flex flex-col items-center justify-center h-screen'>
                <img className='w-4/5 md:w-1/2 lg:w-2/6' src={errorImg} alt="" />
                <p className='my-8 text-5xl capitalize font-semibold'>page not found</p>
                <Link to="/" className='font-semibold hover:bg-[#23BE0A] bg-[#62a812] btn text-white border-0 rounded-lg text-lg'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;