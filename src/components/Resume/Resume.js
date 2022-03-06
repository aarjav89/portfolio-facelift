import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Aarjav_Vue_Developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";


const Resume = (props) => {
    return (

        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Senior Frontend Developer - TC Transcontinental"
                            date="June 2021 - Present"
                            content={[
                                "Translated designs and wireframes into a highly responsive user interface and reusable components using Vue.js.",
                                "Consumed Back-End APIs to display data using the Custom Components, library Components, and Vuex.",
                                "Established hosting for each client & their banners to execute smooth go-live process.",
                                "Documented bug reports, tickets and code changes in JIRA.",
                            ]}
                        />
                        <Resumecontent
                            title="Frontend Developer - Broadridge Financial Solutions"
                            date="September 2020 - June 2021"
                            content={[
                                "Created dynamic layouts catering to the finance and insurance sectors using Angular.js and Unqork platform.",
                                "Used advanced components like Initializers, Plug-ins, Data workflow, Data Grids, Decisions and excel formulas to achieve usability.",
                                "Ensured successful execution after automated testing was performed using Jenkins as soon as my branch is merged with master.",
                                "Assisted manager in interviewing potential new hires, providing professional opinion of candidate proficiency.",
                            ]}
                        />
                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <Resumecontent
                            title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
                            content={[
                                "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="Applications Developer (Mobile+Web) @ triOS College, Brampton  "
                            date="2019 - 2020"
                            content={[
                            ]}
                        />
                        <Resumecontent
                            title="Masters in Business Administration @ Nirma University, Ahmedabad"
                            date="2010 - 2012"
                            content={[]}
                        />
                        <Resumecontent
                            title="Bachelors of Computer Applications @ M.S. University, Baroda"
                            date="2007 - 2010"
                            content={[]}
                        />


                        <h3 className="resume-title">Achievements</h3>
                        <Resumecontent
                            title=""
                            content={[
                                `Certified UI/UX Designer awarded by Google in 2022 `,
                            ]}
                        />
                        <Resumecontent
                            title=""
                            content={[
                                "Certified PSM - 1 Scrum Master awarded by Scrum.org in 2022",
                            ]}
                        />
                        <Resumecontent
                            title=""
                            content={[
                                `Certified Digital Marketing Specialist by TMN, Mumbai, India in 2016` ,
                            ]}
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;

