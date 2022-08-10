import React from "react";
import Cards from "../Components/Cards/Cards";
import webData from "../Components/Cards/webData";

function createCard(webData) {
    return (
        <Cards
            name = {webData.name}
            subTitle = {webData.subTitle}
            imgURL = {webData.imgURL}
            info = {webData.info}
        />
    )
}

function Web() {
    return (
        <>
            {webData.map(createCard)}
        </>
    )
}

export default Web