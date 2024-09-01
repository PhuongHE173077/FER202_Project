import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const nav = useNavigate();
    return (
        <div className='homepage container'>
            <Row style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
                overflow: "hidden"
            }}>
                <Col md={6} className='main-left'>
                    <h1 >Plan in seconds,
                        not weekends.</h1>
                    <h5>Deliver instruction that’s relevant for every student — now with a boost from AI.</h5>
                    <div className='button-main'>
                        {isAuthenticated === true ? <> <button onClick={() => nav('/quizz')} className='learn-more'>Doing quizz now</button></> : <button onClick={() => nav("/login")} className='sign-up'>Sign up free</button>}


                    </div>
                </Col>
                <Col md={6} className='main-right'>
                    <iframe
                        style={{ border: 'none', width: '642px', height: '484px' }}
                        src="https://rive.app/s/SqJ8CRKHKUCiFw8l1z76dQ/embed">
                    </iframe>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;
