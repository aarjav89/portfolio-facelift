import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = (props) => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET's KNOW <span className="purple"> MORE ABOUT </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming from my early school days, I think… 🤷‍♂️
                            <br />
                            <br />I am really good at Scripting Languages like
                            <i>
                                <b className="purple"> HTML, CSS and Javascript </b>
                            </i>
                            <br />
                            <br />
                            I have built many projects using my favorite JS framework/libraries - &nbsp;
                            <i>
                                <b className="purple">React and Vue.js </b> and
                                also tried my hands on some backend stuff including {" "}
                                <b className="purple">
                                    API Development and Adding Authentication (Bearer Token) .
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I dedicate my time creating applications using
                            <i>
                                <b className="purple"> Laravel/Vue and MERN Stack</b>
                            </i>
                            &nbsp; and enhancing my skills.
                            <i>
                                <b className="purple"> Node.js and React.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/aarjav89"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/aarjav89"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/aarjav-c/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home2;
