import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "./components/home/Home"
import MyFavList from "./components/FavList /favlist"


export default function App(){
    return(
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/getMovies"element={<MyFavList/>}/>
        </Routes>
    )
}