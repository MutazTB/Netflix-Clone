import React from "react"

export default function MovieList({ movies }) {
   
    console.log(movies)
    return (
        <>        
            {               
            movies.map((data,index) => {
                return (
                    <>
                       <MovieList key={index} data={data}/>
                    </>
                )
            })}
        </>

    )
}