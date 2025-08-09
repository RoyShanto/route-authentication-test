import { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user, googleLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        googleLogOut()
            .then(() => {
                alert("LogOut successful.")
            }).catch((error) => {
                console.log('Error', error.message)
            });
    }


    return (
        <div className='flex items-center justify-between p-5 m-2'>
            <h1 className='text-5xl'>Header</h1>
            <ul className='flex space-x-5'>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/registration'}>Registration</NavLink></li>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
            </ul>
            <div>
                {
                    user ?
                        <>
                            <span className='mr-5 text-cyan-500 text-2xl'>{user?.displayName}</span>
                            <div onClick={handleLogOut} className="btn">LogOut</div>
                        </>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;