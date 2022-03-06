import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/navBar"
import MyMovieList from "../MovieList/movieList";

export default function Home(){
    const [Movies,setMovies]= useState([]);

    async function getData(){
      let response= await fetch(`${process.env.REACT_APP_SERVER}/trending`);

      let data = await response.json();      
      setMovies(data);              
        }
    
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>       
        <Navbar/>
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
          { Movies && <MyMovieList Movie={Movies}/>}  
        </div>


        </>
    )
}