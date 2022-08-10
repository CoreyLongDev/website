import React from "react";
import Cards from "../Components/Cards/Cards";
import gamesData from "../Components/Cards/gamesData"

function createCard(gamesData) {
    return (
        <Cards
            name = {gamesData.name}
            subTitle = {gamesData.subTitle}
            imgURL = {gamesData.imgURL}
            info = {gamesData.info}
        />
    )
}

function Games() {
    return (
        <>
            {gamesData.map(createCard)}
        </>
    )
}

export default Games