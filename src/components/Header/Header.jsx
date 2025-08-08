import { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='flex items-center justify-between p-5 m-2'>
            <h1 className='text-5xl'>Header</h1>
            <ul className='flex space-x-5'>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/registration'}>Registration</NavLink></li>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
            </ul>
            <div>
                <h3>{user?.displayName}</h3>
            </div>
        </div>
    );
};

export default Header;