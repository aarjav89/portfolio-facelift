import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Home2 from "./Home2";
import Particle from "../Particle";
import homeLogo from "../../Assets/home-main.svg";


const Home = (props) => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>

                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{paddingBottom:15 }} className="heading">
                                Hi There! <span className="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name"> I'm
                                <strong className="main-name"> Aarjav Chandarana </strong>
                            </h1>

                            <div style={{ padding:50, textAlign: "left" }}>
                               <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom:20}}>
                            <img src={homeLogo} alt="home pic" className="img-fluid"/>
                        </Col>

                    </Row>
               </Container>  {/*Ending home-content*/}

            </Container> {/*Ending home-section 1*/}

            <Home2/>
        </section>

    )
}

export default Home;
