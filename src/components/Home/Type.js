import React from 'react'
import Typewriter from "typewriter-effect";

const Type = (props) => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Frontend Developer",
                    "UI/UX Developer",
                    "MERN Stack Developer",
                    "Intermediate Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
