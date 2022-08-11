import React from "react";
import '../App.css'
import { Form, Container, InputGroup, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <>
            <p id="topMessage">Let's get <strong>Connected</strong>!</p>
            <Container className="contactContainer">
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                    <InputGroup>
                        <InputGroup.Text>Speak</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" required/>
                    </InputGroup>
                    <Button variant="outline-info" size="lg" value="Submit">Send</Button>
                </Form>
            </Container>


        </>
    )
}

export default Contact