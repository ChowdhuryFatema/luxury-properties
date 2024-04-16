import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TiSocialSkype } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#282828]">
            <div className="py-10 space-y-4">
                <h1 className="text-3xl text-center text-white">Luxury <span className="text-[#5C963C]">Properties</span></h1>
                <ul className="text-center">
                    <Link to='/' className="inline px-3 text-white border-r">Home</Link>
                    <Link to='/update-profile' className="inline px-3 text-white border-r">Update Profile</Link>
                    <Link to='/about-us' className="inline px-3 text-white border-r">About Us</Link>
                    <li className="inline px-3 text-white">Blog</li>
                </ul>
                <div className="flex text-white justify-center gap-3">
                    <FaFacebook size={32} className="text-[#5C963C]"/>
                    <TiSocialSkype size={32} className="text-[#5C963C]"/>
                    <SiYoutubemusic size={32} className="text-[#5C963C]"/>
                    <AiFillTwitterCircle size={32} className="text-[#5C963C]"/>
                </div>
            </div>
            <div className="bg-[#5C963C] py-3">
                <p className="text-white opacity-75 text-center">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;