import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import swal from 'sweetalert';
import { Form } from "react-bootstrap";

function mytrendModal({ movies, show, handleClose,addToFavList }) {

    function handelFormSubmit(e){
        e.preventDefault();
        let comment = e.target.comment.value;
        // To send a POST request to save the recipe in our database as favorite recipe
        addToFavList(movies, comment);
      }

    async function addToFavList(movies, comment){
        const url = `${process.env.REACT_APP_SERVER}/addmovie`
        // This should match the required data in the server
        const data = {
          title : movies.title,
          poster_path : movies.poster_path,
          overview : movies.overview,          
          comment : comment
        }
        // Use Fetch to send POST request
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        swal("Favorite movies", "You added a new movies", "success");
        handleClose();
      }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> titlee </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handelFormSubmit} style={{margin: "0 10px"}}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control name="comment" type="text" placeholder="Enter Comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default mytrendModal;
