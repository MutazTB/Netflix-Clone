import React from "react";
import Card from "../Movie/Movie";
import MytrendModal from "../ModalMovie/modalMovie";
import { useState } from "react";

export default function MovieList({ trending }) {
  const [show, setShow] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handelChosenMovie(data) {
    setChosenRecipe(data);
    handleShow();
  }
  return (
    <>
      {trending.map(trend => {
        return (
          <>
            <Card trend={trend} handelChosenMovie={handelChosenMovie} />

          </>
        );
      })}
      {chosenRecipe && (
        <MytrendModal
          trend={chosenRecipe}
          show={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
