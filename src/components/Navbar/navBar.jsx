
import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="MovieList">MovieList</Link>
        </nav>
    )
}