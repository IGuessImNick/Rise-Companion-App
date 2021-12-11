import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const Powers = () => {
    return(
        <div>
            <Button>+</Button>
            
            <Container className="">
                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ability</Card.Title>
                            <Card.Text>Generated from API</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Powers;