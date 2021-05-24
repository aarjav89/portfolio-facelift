import React from 'react'
import ProjectCard from "./ProjectCard";
import Tesla from "../../Assets/Projects/project1.png"
import Physio from "../../Assets/Projects/project2.png";
import Wheeldeals from "../../Assets/Projects/project3.png";
import Wildfires from "../../Assets/Projects/project2-1.png";
import Amazon from "../../Assets/Projects/project4.png";


import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";

const Projects = (props) => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Tesla}
                            isBlog={false}
                            title="Tesla Clone"
                            description="Designed Home page of Tesla using React Js, ultimately creating a Tesla-clone. It uses Redux for loading the menu items in the sidebar. To achieve mobile responsiveness, I used react-styled-components library inside components, so that I do not need to leave my component file while coding."
                            link="https://github.com/aarjav89/tesla-clone-react"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Physio}
                            isBlog={false}
                            title="Physio/Rehab Clinic Website"
                            description="Created a physio/rehab clinic's website using HTML, CSS, Wordpress and PHP. The key highlights of the website are Appointment booking and Merchandise sales. The Appointment Booking feature needed the user to register to the site. It even allowed the user to change his/her timings before 3 hours of their appointment. The patient can pay for his/her appointment as soon as they book their appointment or had the option to pay on arrival at the clinic. The merchandise sale feature uses Paypal API for authorizing the credit/debit card payments."
                            link="https://physio.aarjav.ca"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Wheeldeals}
                            isBlog={false}
                            title="Wheeldeals - Used Car Portal"
                            description="Using Vue.js for the frontend,Php-Laravel for the backend and MySql for the database, I created an online portal for selling used cars. The site had an admin panel with different user rights to add, read, update and delete listings in the inventory. It also had a static Car Finance Application. The site also provided pictorial representation of the overall sales to the admin user using charts created by HighCharts library."
                            link="#"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Wildfires}
                            isBlog={false}
                            title="Wildfires using NASA API"
                            description="Using Vuetify library for VUE.JS, I created a real-time Wildfires app. It uses NASA's open source API for fetching live wildfires data. It has Single-Page-Appliation (SPA) feature using Vue Routers which greatly enhances the user experience. For plotting the wildfires, it uses google-maps-2 library for Vue.js"
                            link="https://github.com/aarjav89/vuetify-wildfires"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Amazon}
                            isBlog={false}
                            title="Amazon Clone"
                            description="Created Amazon Clone using React.js, Redux, Next.js, Tailwind CSS, Stripe and NextAuth. The key feature of the website is its server side rendering using Next.Js. It loads the data lazily on the server and renders the output on the frontend seamlessly, increasing the user experience. The site uses Tailwind CSS to achieve responsiveness across various screen sizes."
                            link="https://github.com/aarjav89/amazon-clone-react-redux-tw-nxt"
                        />
                    </Col>

                </Row>

            </Container>
        </Container>

    )
}

export default Projects;
