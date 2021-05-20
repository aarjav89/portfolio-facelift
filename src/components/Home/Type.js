import React from 'react'
import Typewriter from "typewriter-effect";

const Type = (props) => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Developer",
                    "UI/UX Developer",
                    "MERN Stack Developer",
                    "Frontend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
