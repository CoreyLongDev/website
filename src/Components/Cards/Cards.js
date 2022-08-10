import React from "react";
import { Card, Image } from "react-bootstrap";


function Cards(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={props.imgURL} />
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{props.subTitle}</Card.Title>
                <Card.Title>{props.info}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}

export default Cards;