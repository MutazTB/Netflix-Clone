import React from 'react'
import { Card, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function Favmovie({ movie, getFavMovie }) {
  function handelDelete(id) {
    //   Adding alert before delete
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
       
        const url = `${process.env.REACT_APP_SERVER}/DELETE/${id}`;
        const response = fetch(url, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
         
          getFavMovie();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title> Title: {movie.title}</Card.Title>        
        <Card.Title> overview: {movie.overview}</Card.Title>
        <Card.Title>Comment :{movie.comment}</Card.Title>
        <Card.Text style={{ overflowY: "scroll", maxHeight: "100px" }}>
          {movie.summary}
        </Card.Text>
        <Button onClick={() => handelDelete(movie.id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}