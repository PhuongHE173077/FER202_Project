import React, { useState } from 'react';
import Header from '../Header/Header';
import { Row } from 'react-bootstrap';
import SideBar from './SideBar';
import '../../scss/Admin.scss';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"

            />
        </div>
    );
}

export default Admin;