import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Main() {

    return (
        <Container>
            <br/><br/><br/>
            <Row>
                <Col></Col>
                <Col xs={3} style={{textAlign: "center"}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col xs={3}>
                    <Button variant="primary" style={{width: 300}}>로그인</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Main;