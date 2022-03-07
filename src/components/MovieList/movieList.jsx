import React from "react";
import Card from "../Movie/Movie";
import MytrendModal from "../ModalMovie/modalMovie";
import { useState } from "react";

export default function MovieList({ trendingMovie }) {
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
      {trendingMovie.map(trend => {
        return (
          <>
            <Card movie={trend} handelChosenMovie={handelChosenMovie} />

          </>
        );
      })}
      {chosenRecipe && (
        <MytrendModal
        movies={chosenRecipe}
          show={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
