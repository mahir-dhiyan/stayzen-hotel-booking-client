import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authproviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);
    const notifyLogin = () => {
        toast.success('Successfully Registered', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    }
    const notifyPassword = message => {
        toast.warn(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Flip,
        });
    }
    const validPassword = password => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;
        if (!hasUpperCase) {
            notifyPassword('Password must have at least one uppercase letter');
            return false;
        }
        if (!hasLowerCase) {
            notifyPassword('Password must have at least one lowercase letter');
            return false;
        }
        if (!isValidLength) {
            notifyPassword('Password should be at least 6 character long');
            return false;
        }
        return true;
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        if (!validPassword(password)) {
            return;
        }
        console.log(email, name, photo, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                notifyLogin();
                return updateUserProfile(name, photo);



            })
            .then(() => {
                setTimeout(() => {
                    navigate("/");
                }, 3000); // 3000 milliseconds = 3 seconds
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="">
            <Helmet>
                <title>Register-Wovenwood</title>
            </Helmet>
            <div className="bg-[#ECECF2] text-center mt-4 dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                <h2 className="text-5xl font-semibold"><span className="text-[#C56652]">Register</span> with Email</h2>
            </div>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className=" relative flex items-center">
                        <input
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            className="input  w-full input-bordered pr-10"
                            required /><FaRegEye onClick={() => setShowPass(!showPass)} className="text-2xl  absolute right-3 cursor-pointer" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white text-xl border-none bg-[#a95543]">Create Account</button>
                </div>
            </form>
            <p className="text-center font-semibold dark:text-fuchsia-50 text-lg mt-4">Already have an account? Or, want to login with <span className="text-xl font-bold">Google</span> or <span className="text-xl font-bold">Github</span> account? <Link to="/login" className="font-bold text-[#a95543] text-2xl  hover:text-white">Login</Link></p>




            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"

            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            // transition: Flip
            />
        </div>

    );
};

export default Register;