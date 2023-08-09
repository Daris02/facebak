import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container m-0">
            <div >
                <div className="row position-fixed">
                    <div className="col-auto d-flex vh-100 p-0">
                        <Navbar />
                    </div>
                    <div className="col offset-auto vh-100 mx-5 px-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
