import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {


    const { googleSingIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // e.target.reset();
    }

    const handleGoogleSignIn = () => {
        googleSingIn()
            .then((result) => {
                console.log(result.user)
                navigate('/home')
            }).catch((error) => {
                console.log('Error', error.message)
            });
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="card bg-base-100 w-full max-w-sm shrink-0 border-2">
                <div className="card-body">
                    <h1 className='text-blue-500 font-bold text-2xl text-center'>Login now!</h1>
                    <fieldset className="fieldset relative">
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        <input type={eye ? "text" : "password"} name="password" className="input w-full" placeholder="Password" />
                        <div onClick={handleEye} className="absolute top-16 right-3 text-lg">
                            {eye ? <FaEye /> : <FaEyeSlash />} </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p>If you don't have account.. <NavLink to={'/registration'} className="text-red-300">Sign Up</NavLink></p>
                    </fieldset>
                </div>
            </form>
            <br />
            <p className="inline mr-3">Login By : </p>
            <button onClick={handleGoogleSignIn} className="btn btn-soft btn-info border-blue-500">Google</button>
        </div>
    );
};

export default Login;