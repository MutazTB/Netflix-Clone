
import React from "react";
import { Button, Card } from "react-bootstrap";

function MyCard({ trend, handelChosenMovie }) {
    return (
        <div key={trend.id}>
            <Card style={{ width: "18rem", maxHeight: "400px" }}>
                <Card.Img variant="top" src={trend.image} />
                <Card.Body>
                    <Card.Title>{trend.title}</Card.Title>
                    <Card.Text>{trend.overview}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => handelChosenMovie(trend)}
                    >
                        Add to Fav
                    </Button>
                </Card.Body>
            </Card>
            {/* <MytrendModal trend={trend} show={show} handleClose={handleClose} /> */}
        </div>
    )
}
export default MyCard;