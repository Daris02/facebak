import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <div>
            <Navbar user={user} />
            <Outlet />
        </div>
    );
}

export default Header;
