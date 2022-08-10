import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./Cards.css"


function Cards(props) {

    return (

        <div className="cardHolder">
            <Card className="card">
                <Card.Img src={props.imgURL} />
                <Card.Body className="cardText">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.subTitle}</Card.Text>
                    <Card.Text>{props.info}</Card.Text>
                    <Card.Text id="gameInfo"> {props.infoTwo} </Card.Text>
                    <Card.Link href={props.githubLink}>Github</Card.Link>
                    <Card.Link href={props.liveSite}>Live-Site</Card.Link>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;