import { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import userImg from '../../assets/user.png';


const UpdateProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext);

    console.log(user.email)

    console.log(user);



    const {
        register,
        handleSubmit,
    } = useForm();


    
    const handleUpdateProfile = (data) => {
        console.log(data)

        const { name, image } = data;


        updateUserProfile(name, image)
        
    }

    return (
        <div>
             <Helmet>
                <title>Update Profile | Luxury Properties</title>
            </Helmet>
            <div className="shadow-lg bg-white w-full">
                <div className="max-w-7xl mx-auto px-5">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-center item-center my-10 lg:my-20 gap-5">

                    <div className="flex flex-col flex-1  justify-center p-5 shadow-md rounded-xl border">
                        <img data-aos="zoom-in" data-aos-duration="500" src={user?.photoURL || userImg} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                            <div className="my-2 space-y-2 overflow-hidden md:px-10">
                            
                                <h2 data-aos="fade-up" data-aos-delay="600" className="text-sm md:text-lg lg:text-xl font-semibold"><span className="font-bold text-[#23BE0A]">Name:</span> {user?.displayName && user?.displayName}</h2>

                                <p data-aos="fade-up" data-aos-delay="700"><span className="font-bold text-sm md:text-xl text-[#23BE0A]">Email:</span> {user?.email && user.email}</p>

                                <p data-aos="fade-up" data-aos-delay="800"><span className="font-bold text-sm md:text-lg overflow-hidden text-[#23BE0A]">Photo URL:</span> {user?.photoURL || ''}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 md:w-1/2 rounded-lg flex flex-col justify-center items-center">
                        <div className="flex flex-col w-full max-w-lg p-6 shadow rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border">
                            <div className="mb-4 md:mb-8 text-center">
                                <h1 data-aos="fade-down" data-aos-duration="1000" className="my-3 text-2xl md:text-4xl font-bold text-[#23BE0A]">Update Profile</h1>
                                <hr className="w-2/3 mx-auto" />
                            </div>
                            <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-8">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-2 text-sm">Name </label>
                                        <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                            {...register("name")} />
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label className="text-sm">Photo URL</label>

                                        </div>
                                        <input type="text" name="image" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                            {...register("image")} />
                                    </div>


                                    <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                    {...register("email")} disabled/>
                                
                            </div>

                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#23BE0A] text-white dark:bg-violet-600 dark:text-gray-50">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateProfile;