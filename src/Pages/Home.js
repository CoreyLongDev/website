import React from "react";
import Photo from '../Images/ProfileOne.jpeg'

const Home = () => {
    return (
        <>
            <img id='profilePic' src={Photo} alt="Picture of me and my beautiful wife" />
            <div className="textContainer">
                <h2 id="welcomeSign">Welcome<span id="colorIt">!</span></h2>
                <p>I'm a Software Developer who enjoys work across Full Stack Applications, Games and Virtual Reality</p>
                <p>^ Check out what I've been up to lately ^</p>
            </div>
        </>
    )
}

export default Home