import { Helmet } from "react-helmet-async";
import Navbar from "../shared/Navbar/Navbar";

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>Contact Us | Luxury Properties</title>
            </Helmet>
            
            <div className="shadow-lg bg-white w-full">
                <div className="max-w-7xl mx-auto px-5">
                    <Navbar></Navbar>
                </div>
            </div>


            <div className="grid max-w-7xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 xl:px-32">
                
                <form noValidate="" className="order-2 md:order-1 space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100 border" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100 border" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100 border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded text-white bg-[#23BE0A] hover:bg-[#62a812] dark:bg-violet-600 dark:text-gray-50">Send Message</button>

                </form>
                <div className="order-1 md:order-2 flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 data-aos="fade-down" data-aos-duration="1000" className="text-4xl font-bold leading-tight lg:text-5xl text-center">Get in touch</h2>
                    </div>
                    <img src='https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif' />
                </div>
            </div>
        </div>
    );
};

export default Contact;