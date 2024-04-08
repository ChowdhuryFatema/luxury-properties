import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="max-w-7xl register rounded-lg mx-auto px-5 flex flex-col justify-center items-center my-5">
        <div className="form lg:my-10 text-white flex flex-col w-full max-w-lg p-6 shadow rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border">
            <div className="mb-4 md:mb-8 text-center">
                <h1 className="my-3 text-2xl md:text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Nice to meet you! Enter your details to register.</p>
            </div>
            <form className="space-y-8">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Name </label>
                        <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent" required />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Password</label>

                        </div>
                        <input type="password" name="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent" required />

                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm">Confirm Password</label>

                        </div>
                        <input type="password" name="confirmPassword" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 bg-transparent" required />

                    </div>

                    <div>
                        <input type="checkbox" name="terms" />
                        <span className="ml-2">I agree the Terms and Conditions</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#59C6D2] text-white dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 font-semibold text-blue-600"> Sign In</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;