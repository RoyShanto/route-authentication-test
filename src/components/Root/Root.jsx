import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='border-2 p-5 m-2 border-amber-600'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;