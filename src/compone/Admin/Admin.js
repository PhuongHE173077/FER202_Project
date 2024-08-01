import React, { useState } from 'react';
import Header from '../Header/Header';
import { Row } from 'react-bootstrap';
import SideBar from './SideBar';
import '../../scss/Admin.scss';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed} />
            </div>
            <div className='admin-main'>
                <div className='collapsed'>
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div>
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default Admin;