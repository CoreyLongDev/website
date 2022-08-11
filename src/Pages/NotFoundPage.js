import React from "react";
import LockedDoor from '../Images/404.png'
import '../App.css'

const NotFoundPage = () => {
    return(
        <img id="theDoor" src={LockedDoor} alt="closed and locked door detailing that this page does not exist" />
    )
}

export default NotFoundPage