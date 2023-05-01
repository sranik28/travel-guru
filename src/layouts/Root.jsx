import React from 'react';
import Header from '../pages/Home';
import Login from '../pages/LoginSite/Login';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div>
           
            <Outlet />
        </div>
    );
};

export default Root;