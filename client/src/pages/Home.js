import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from '../Components/Header/index';

import { QUERY_POWERS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POWERS);
    const powers = data?.powers || [];

    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                >
                    <div className="col-12 col-lg-9">
                    <textarea
                        name="commentText"
                        placeholder="Add your comment..."
                        value={commentText}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                    </div>

                    <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" type="submit">
                        Add Comment
                    </button>
                    </div>
                </form>
                </>
            ) : (
                <p>
                You need to be logged in to view a Character. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
        )}
            <Header />
            <br />
            <br />
            <br />
            <Container className="mb-2">
            <Row className="mb-2">
                <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control />
                </Form>
            </Row>
            <Row className="align-items-center">
                <Col>
                <Form>
                    <Form.Label>Finesse</Form.Label>
                    <Form.Control />
                </Form>
                </Col>
                <Col>
                <Form>
                    <Form.Label>Fortitude</Form.Label>
                    <Form.Control />
                </Form>
                </Col>
                <Col>
                <Form>
                    <Form.Label>Influence</Form.Label>
                    <Form.Control />
                </Form>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                <Form>
                    <Form.Label>Might</Form.Label>
                    <Form.Control />
                </Form>
                </Col>
                <Col>
                <Form>
                    <Form.Label>Understanding</Form.Label>
                    <Form.Control />
                </Form>
                </Col>
            </Row>
            </Container>

            <Container>
                <Row>
                <Col>
                    <Form.Label>Minor</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Severe</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Grievous</Form.Label>
                    <Form.Control />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;