import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { useNavigate, useLocation } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state || '/')

                toast.success('User Login Successfully')

            })
            .catch(error => toast.error(error.message))

    }

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                toast.success('User Login Successfully')
                if (result.user) {
                    navigate(location?.state || '/')
                }
            })
    }


    return (

        <div>
             <Helmet>
                <title>Login | Luxury Properties</title>
            </Helmet>
            <div className="text-white z-50">
                <div className="overlay2"></div>
                <Navbar></Navbar>
            </div>
            <div className="flex login flex-col justify-center items-center pb-20 pt-40 -mt-20 px-5">
                <div className="form w-full max-w-lg p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 text-white">
                    <div className="z-50">
                        <h2 data-aos="fade-down" data-aos-duration="1000" className="mb-3 text-2xl md:text-3xl font-semibold text-center">Login to your account</h2>
                        <p className="text-sm text-center dark:text-gray-600">Dont have account?
                            <Link to='/register' href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Sign up here</Link>
                        </p>
                        <div className="md:flex gap-5 my-6 space-y-3 md:space-y-0">
                            <button onClick={() => handleSocialLogin(googleLogin)} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
                                <p>Login with Google</p>
                            </button>
                            <button data-aos-delay="500" onClick={() => handleSocialLogin(githubLogin)} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                                <p>Login with GitHub</p>
                            </button>
                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-600" />
                            <p className="px-3 dark:text-gray-600">OR</p>
                            <hr className="w-full dark:text-gray-600" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-sm">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 bg-transparent"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-400 ">This field is required</span>}
                                </div>
                                <div className="space-y-2 relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50  bg-transparent dark:text-gray-800 focus:dark:border-violet-600"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className="text-red-400 ">This field is required</span>}
                                    <p
                                        onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-[2px]">

                                        {showPassword ?
                                            <LuEye size={20} /> :
                                            <LuEyeOff size={20} />}
                                    </p>
                                </div>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-[#23BE0A] text-white">Sign in</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;