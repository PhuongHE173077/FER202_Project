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
import { toast } from 'react-toastify';
function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCf, setPasswordCf] = useState('');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = () => {
        if (!validateEmail(email)) {
            toast.error("Invalid Email")
            return;
        }
        if (password !== passwordCf) {
            toast.error("password and password confirm is not sample")
            return;
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
                                <MDBInput wrapperClass='mb-4' onChange={(e) => setPasswordCf(e.target.value)} label='Password confirm' id='formControlLg' type='password' size="lg" />
                                <MDBBtn className="mb-4 px-5" onClick={handleRegister} color='dark' size='lg'>Register</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Do have an account? <Link to={'/login'} style={{ color: '#393f81' }}>Login here</Link></p>

                                <div className='d-flex flex-row justify-content-start'>
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

export default Register;