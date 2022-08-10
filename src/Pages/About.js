import React from "react";
import LockedDoor from '../Images/404.png'
import '../App.css'

const About = () => {
    return(
    <>
    <img src={LockedDoor} id="officePeek" />
    <h3>Here We Go!</h3>
    <div className="aboutParagraph">
        <p>blah blah blah</p>
    </div>
    </>
    )
}

export default About