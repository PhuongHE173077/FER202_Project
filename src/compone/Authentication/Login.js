import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import '../../scss/Login.scss'
import { postLogin } from '../services/ApiService';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';

function Login(props) {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        let res = await postLogin(email, password);

        if (res && res.EC === 0) {
            dispatch(doLogin(res))
            Swal.fire({
                icon: "success",
                title: "Success",
                text: res.EM,
            });
            nav('/')
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: res.EM,
                timer: 1500
            });
        }

    }
    return (
        <div style={{ backgroundColor: '#8854c0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ margin: '20px 0 0 20px' }}>
                <NavLink to="/" className='navbar-brand'><img src='https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg' /></NavLink>

            </div>
            <MDBContainer className="my-5" style={{ maxWidth: '900px' }}>

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <img src='https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg' />

                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} label='Password' id='formControlLg' type='password' size="lg" />

                                <MDBBtn className="mb-4 px-5" onClick={handleLogin} color='dark' size='lg'>Login</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to={'/register'} style={{ color: '#393f81' }}>Register here</Link></p>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>
            <div>.</div>

        </div>


    );
}

export default Login;