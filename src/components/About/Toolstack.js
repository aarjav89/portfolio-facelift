import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiWebstorm
} from "react-icons/si";
import { FaAws, FaDigitalOcean } from "react-icons/fa";

const Toolstack = (props) => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/><p>WebStorm</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode /><p> VS Code </p>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostman /><p>Postman</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws /><p> AWS </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaDigitalOcean /><p> Digital Ocean </p>
            </Col>
        </Row>
    )
}

export default Toolstack;
