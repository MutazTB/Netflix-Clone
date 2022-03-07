import React from 'react'
import { useState, useEffect } from "react";
import NavBar from "../Navbar/navBar";
import Myfavmovie from "./favmovie";

export default function favMovie() {
  const [favMovie, setfavMovie] = useState([]);

  async function getFavMovie() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();

    setfavMovie(data);
  }

  useEffect(() => {
    getFavMovie();
  }, []); 
  return (
    <>
      <h1>From favMovie Page</h1>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
       
        {favMovie &&
          favMovie.map((movie) => {
            return (
              <Myfavmovie
                key={movie.id}
                getFavMovie={getFavMovie}
                movie={movie}
              />
            );
          })}
      </div>
    </>
  );
}