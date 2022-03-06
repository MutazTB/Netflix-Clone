import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import MyModalMovie from "../ModalMovie/modalMovie"
import { useState } from "react"

export default function MovieList({ Movies }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handelChosenMovie(data){
        setChosenRecipe(data);
        handleShow();
      };
    return (
        <>
            {Movies.map(data => {
                return (
                    <>
                        <div key={data.id}>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body>
                                    <Card.Title>Title: {data.title}</Card.Title>
                                    <Card.Text>
                                        {data.overview}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handelChosenMovie(data)}>Add to Fav</Button>
                                </Card.Body>
                            </Card>
                            <MyModalMovie trend={data} show={show} handleClose={handleClose} />
                        </div>
                    </>
                )
            })}
        </>

    )
}