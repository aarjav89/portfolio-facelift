import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Particle from "../Particle";


const Home = (props) => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
            </Container>
        </section>

    )
}

export default Home;
