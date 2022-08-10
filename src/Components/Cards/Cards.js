import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css"


function Cards(props) {
    return (
        <div className="cardHolder">
            <Card className="card">
                <Card.Img src={props.imgURL} />
                <Card.Body>
                    <Card.Title className="cardText">{props.name}</Card.Title>
                    <Card.Text className="cardText">{props.subTitle}</Card.Text>
                    <Card.Text className="cardText">{props.info}</Card.Text>
                    <Card.Text id="gameInfo"> {props.infoTwo} </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards;