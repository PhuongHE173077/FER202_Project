import React from 'react';
import { Row, Col } from 'react-bootstrap';

function MyComponent() {
    return (
        <div>
            <Row style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
                overflow: "hidden"
            }}>
                <Col md={6}>
                    <h1 style={{ justifyContent: "center" }}>Lập kế hoạch trong vài giây,
                        không phải cuối tuần.</h1>
                </Col>
                <Col md={6}>
                    <iframe
                        style={{ border: 'none', width: '642px', height: '484px' }}
                        src="https://rive.app/s/SqJ8CRKHKUCiFw8l1z76dQ/embed">
                    </iframe>
                </Col>
            </Row>
        </div>
    );
}

export default MyComponent;
