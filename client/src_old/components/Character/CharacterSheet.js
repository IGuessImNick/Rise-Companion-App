import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// import { render } from "react-dom";
// import Traits from "../Traits/Traits";
// import Header from '../UIComponents/Header';
// import SideDrawer from '../UIComponents/SideDrawer';
// import css from '../../css/CharacterSheet.css';
import { Form, Row, Col, Container } from 'react-bootstrap';

import { QUERY_USER, QUERY_CHARACTER, QUERY_POWERS } from '../../utils/queries';
import { ADD_USER } from '../../utils/mutations';

const CharacterSheet = () => {
    // const sideDrawer = <SideDrawer />
    return (
        <div className="CharacterSheet">
            <Container>
                {/* <header className="CharacterSheet-header"> */}
                    {/* <Traits /> */}
                {/* </header> */}
                {/* { sideDrawer } */}

                {/* start of latest updated section DATE: 20211209 */}
                <Form>
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Finesse</Form.Label>
                            <Form.Control />

                            <Form.Label>Fortitude</Form.Label>
                            <Form.Control />

                            <Form.Label>Influence</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Might</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGrid">
                            <Form.Label>Understanding</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                </Form>

            </Container>

        </div>
    );
}

export default CharacterSheet;