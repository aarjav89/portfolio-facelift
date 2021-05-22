import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = (props) => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hello, I am <span className="purple">Aarjav Chandarana </span>
                        from <span className="purple"> Toronto, ON</span>
                        <br />I am a professional Full Stack Developer.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Solving Puzzles on Unblock
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writting Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Photography
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Hiking
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                        "Life is like an ice-cream! Enjoy before it melts"{" "}
                    </p>
                    <footer className="blockquote-footer">Aarjav</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;
