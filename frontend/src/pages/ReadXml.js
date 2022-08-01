import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ReadXml() {

    function fileUpload(e) {
        e.preventDefault();

    }

    return (
        <Container fluid>
            <Row>
                <Col style={{textAlign: "right"}}>
                    <input type="text" />&nbsp;
                    <Button variant="secondary" type="submit" onClick={fileUpload}></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ReadXml;