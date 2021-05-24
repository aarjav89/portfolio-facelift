import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>Designed and Developed by : Aarjav Chandarana</h3>
                </Col>
                <Col md="4" className="footer-copyright">
                    <h3>Copyright © {year} AC</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/aarjav89"
                                style={{ color: "white" }}
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/aarjav89"
                                style={{ color: "white" }}
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/aarjav-c/"
                                style={{ color: "white" }}
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>

                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
