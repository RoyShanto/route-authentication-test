import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex items-center justify-between p-5 m-2'>
            <h1 className='text-5xl'>Header</h1>
            <ul className='flex space-x-5'>
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;