import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Finesse from './Finesse';
import Fortitude from './Fortitude';
import Might from './Might';
import Influence from './Influence';
import Understanding from './Understanding';

function AspectContainer() {
    return(
        <Container>
            <Row className="justify-content-space-between">
                <Col xs="auto" className="justify-content-space-between">
                    <Finesse />
                </Col>
                <Col xs="auto">
                    <Fortitude />
                </Col>
                <Col xs="auto">
                    <Influence />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Might />
                </Col>
                <Col xs="auto">
                    <Understanding />
                </Col>
            </Row>
        </Container>
    )
}

export default AspectContainer;