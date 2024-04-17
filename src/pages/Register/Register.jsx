import { Link} from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
import { useNavigate} from "react-router-dom";


const Register = () => {

    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    // const location = useLocation()
    const navigate = useNavigate();
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        const { email, password, name, image } = data;

        if (password.length < 6) {
            return toast.error("Your password must be at least 6 characters")
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Your password should contain at least one lower case')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should contain at least one upper case')
        }

        createUser(email, password)
            .then(result => { 
                toast.success('User Create Successfully');
                console.log(result)
                logOut()
                navigate('/login')

                updateUserProfile(name, image)
                

            })
            .catch(error => toast.error(error.message))

    }


    return (
        <div>
             <Helmet>
                <title>Sign Up | Luxury Properties</title>
            </Helmet> 
            <div className="text-white z-50">
                <div className="overlay2"></div>
                <Navbar color={'text-white'} navColor={'lg:text-white'}></Navbar>
            </div>
            <div className="register rounded-lg flex flex-col justify-center items-center -mt-20 pt-32 pb-10 md:pt-40 md:b-20 px-5">
                <div className="form text-white flex flex-col w-full max-w-lg p-6 shadow rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-4 md:mb-8 text-center">
                        <h1 data-aos="fade-down" data-aos-duration="1000" className="my-3 text-2xl md:text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm dark:text-gray-600">Nice to meet you! Enter your details to register.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Name </label>
                                <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                    {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-400 ">This field is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-400">This field is required</span>}
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Photo URL</label>

                                </div>
                                <input type="text" name="image" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent"
                                    {...register("image", { required: true })} />
                                {errors.image && <span className="text-red-400">This field is required</span>}
                            </div>

                            <div className="relative">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>

                                </div>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-400">This field is required</span>}
                                <p
                                    onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[38px]">

                                    {showPassword ?
                                        <LuEye size={20} /> :
                                        <LuEyeOff size={20} />}
                                </p>
                            </div>


                            <div>
                                <input type="checkbox" name="terms" />
                                <span className="ml-2">I agree the Terms and Conditions</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#23BE0A] text-white dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                                <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 font-semibold text-blue-600"> Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;