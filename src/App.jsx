import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "./components/home/Home"
//import MovieList from "./components/MovieList/movieList"


export default function App(){
    return(
        <Routes>
            <Route path="/"element={<Home/>}/>
            {/* <Route path="/MovieList"element={<MovieList/>}/> */}
        </Routes>
    )
}