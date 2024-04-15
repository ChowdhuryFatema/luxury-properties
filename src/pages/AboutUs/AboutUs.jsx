import { Helmet } from "react-helmet-async";
import Navbar from "../shared/Navbar/Navbar";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Luxury Properties</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="my-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center mx-auto  my-5 md:my-8">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-none text-center">About Us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg> Investors strategically acquire and manage properties to generate income and build wealth, employing various strategies such as rentals and property flips.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-green-500 p-8 rounded-b-lg">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                            <p className="text-xl font-semibold leading-tight">Lily Rose</p>
                            <p className="text-sm uppercase">Real Estate Investor</p>
                        </div>
                    </div>
                    < div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Professionals overseeing rental properties ensure smooth operations, from tenant management to maintenance, maximizing returns for property owners.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-green-500 p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                            <p className="text-xl font-semibold leading-tight">Jack Ryan</p>
                            <p className="text-sm uppercase">Property Manager</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg> 
                                Home Inspectors conduct thorough examinations of residential properties, focusing on structural integrity, safety, and maintenance concerns, offering peace of mind to homebuyers.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-green-500 p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                            <p className="text-xl font-semibold leading-tight">Emma Grace</p>
                            <p className="text-sm uppercase">Home Inspector</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lawyer: Legal professionals specializing in property transactions ensure legal compliance, draft contracts, and resolve disputes, safeguarding 
                                clients interests in real estate deals.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-green-500 p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Lucas James</p>
                            <p className="text-sm uppercase">Real Estate Lawyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;