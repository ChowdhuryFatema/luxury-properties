import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import userImg from '../../../assets/user.png';


const Navbar = ({ color, navColor }) => {

    const { user, logOut } = useContext(AuthContext);


    const navLinks = <>
        < NavLink to='/' className={`py-1 px-2 md:px-3 lg:text-lg lg:font-semibold ${navColor}`}>Home</NavLink>
        <NavLink to='/update-profile' className={`py-1 px-2 md:px-3 lg:text-lg lg:font-semibold ${navColor}`}>Update Profile</NavLink>
        <NavLink to='/contact-us' className={`py-1 px-2 md:px-3 lg:text-lg lg:font-semibold ${navColor}`}>Contact Us</NavLink>
    </>

    return (
        <div className="max-w-7xl mx-auto relative top-0 left-0 z-50
        ">
            <div className="navbar">
                <div className="navbar-start w-3/4 md:w-1/2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                            {
                                user &&
                                <button onClick={() => logOut()} className='font-semibold bg-[#23BE0A] hover:bg-[#62a812] btn text-white border-0 rounded-lg mt-4 btn-sm'>Log out</button>
                            }
                            
                        </ul>
                    </div>
                    <Link to='/' className={`text-2xl lg:text-3xl ${color} font-bold`}>Luxury Properties</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end w-1/5 md:w-1/2 ">
                    {
                        user
                            ?
                            <>
                                <div className='tooltip tooltip-left' data-tip={user?.displayName && user?.displayName}>
                                    <div tabIndex={0} role="button" className="btn user-img btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userImg} />
                                        </div>
                                    </div>

                                </div>

                                <button onClick={() => logOut()} className='lg:flex hidden font-semibold bg-[#23BE0A] hover:bg-[#62a812] btn text-white border-0 rounded-lg text-lg ml-3'>Log out</button>
                            </>


                            : <Link to="/login" className='font-semibold bg-[#23BE0A] hover:bg-[#62a812] btn text-white border-0 rounded-lg text-lg'>Login</Link>


                    }
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    color: PropTypes.string,
    navColor: PropTypes.string,
}
export default Navbar;