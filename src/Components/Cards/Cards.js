import React from "react";
import { Card, Image } from "react-bootstrap";


function Cards(props) {
    return (
        <div className="cardHolder">
            <Card className="card">
                <Card.Img 
                    src={props.imgURL}
                    // style={{ maxWidth: "550px", maxHeight: "auto" }}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Title>{props.subTitle}</Card.Title>
                    <Card.Title>{props.info}</Card.Title>
                    <Card.Text>
                        pending paragraph
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards;