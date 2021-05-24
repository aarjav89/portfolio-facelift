import React from 'react'
import { Col, Row } from "react-bootstrap";
import { FaVuejs, FaLaravel } from "react-icons/fa";

import {

    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import { SiMysql, SiFirebase, SiTailwindcss } from "react-icons/si";

const Techstack = (props) => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaVuejs/><p> Vue.js </p>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiReact /><p> React </p>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs /><p> Node.js </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 /><p> Javascript</p>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <FaLaravel/><p> Laravel </p>
            </Col>


            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb /><p>MongoDB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql /><p>MySql</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss /><p> Tailwind CSS </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit /><p> Git </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase /><p> FireBase</p>
            </Col>
        </Row>
    )
}

export default Techstack;
