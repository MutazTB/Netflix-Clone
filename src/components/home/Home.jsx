import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/navBar"
import MovieList from "../MovieList/movieList"
//import Favlist from "../FavList/favlist";

export default function Home() {
    const [trending, setTrending] = useState([]);

    async function getData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

        let data = await response.json();
        setTrending(data);

    }

    useEffect(() => {
        getData();
    }, []);
  
    return (
        <>
            <h1>From home page</h1>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {trending && <MovieList trendingMovie={trending} />}                
            </div>


        </>
    )
}