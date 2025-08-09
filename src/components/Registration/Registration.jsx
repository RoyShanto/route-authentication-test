import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Registration = () => {

    const { createUser, UserUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then((result) => {
                // console.log(result)
                return UserUpdateProfile(result.user, name)
                    .then(() => {
                        console.log(result)
                        navigate('/home')
                        e.target.reset();
                    })
                    .catch((error) => { console.log(error.message) })
            })
            .catch((error) => {
                console.log('Error: ', error.message)
            });
    }

    return (
        <div>
            <form onSubmit={handleRegistration} className="card bg-base-100 w-full max-w-sm shrink-0 border-2">
                <div className="card-body">
                    <h1 className='text-blue-500 font-bold text-2xl text-center'>Register now!</h1>
                    <fieldset className="fieldset relative">
                        <input type="text" name="name" className="input w-full" placeholder="Name" />
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        <input type={eye ? "text" : "password"} name="password" className="input w-full" placeholder="Password" />
                        <div onClick={handleEye} className="absolute top-26 right-3 text-lg">
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