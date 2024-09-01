import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../scss/Login.scss'
import { postLogin } from '../services/ApiService';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';

function Login(props) {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleClickHome = () => {
        nav('/')
    }
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
        <Container>
            <Row>
                <Col md={9}><h3 style={{ cursor: 'pointer' }} onClick={() => handleClickHome()}>Quizz</h3></Col>
                <Col>Don't have account ?  <button>Create account</button></Col>
                <hr />
            </Row>
            <div className='main-login'>
                <div className='title-login'>
                    Login the quizz
                </div>
                <div className='form-login'>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control
                                type='text'
                                autoFocus
                                placeholder='abc@gmial.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <div>
                        <button onClick={handleLogin}>Login</button>
                    </div>

                </div>

            </div>

        </Container>
    );
}

export default Login;