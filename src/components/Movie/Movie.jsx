import React from "react";
import { Button, Card } from "react-bootstrap";

function myMovie({ movie, handelChosenMovie }) {
    return (
        <div key={movie.id}>
            <Card style={{ width: "18rem" }}>               
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => handelChosenMovie(movie)}
                    >
                        Add to Fav
                    </Button>
                </Card.Body>
            </Card>
            {/* <MymovieModal movie={movie} show={show} handleClose={handleClose} /> */}
        </div>
    )
}
export default myMovie;