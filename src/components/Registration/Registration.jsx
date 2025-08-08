import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Registration = () => {
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div>
            <form onSubmit={handleRegistration} className="card bg-base-100 w-full max-w-sm shrink-0 border-2">
                <div className="card-body">
                    <h1 className='text-blue-500 font-bold text-2xl text-center'>Register now!</h1>
                    <fieldset className="fieldset relative">
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        <input type={eye ? "text" : "password"} name="password" className="input w-full" placeholder="Password" />
                        <div onClick={handleEye} className="absolute top-16 right-3 text-lg">
                            {eye ? <FaEye /> : <FaEyeSlash />} </div>
                        <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                        <p>Already have account.. <NavLink to={'/login'} className="text-red-300">Login</NavLink></p>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Registration;