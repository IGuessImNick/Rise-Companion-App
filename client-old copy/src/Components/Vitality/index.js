
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Vitality = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <Col xs={3} className="mb-1">
                        <div className="d-grid gap-1">
                            <Button variant="outline-danger">Minor</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} className="mb-1">
                        <div className="d-grid gap-1">
                            <Button variant="outline-danger">Severe</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} className="mb-1">
                        <div className="d-grid gap-1">
                            <Button variant="outline-danger">Grievous</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Vitality;