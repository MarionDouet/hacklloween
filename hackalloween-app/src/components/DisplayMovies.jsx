import React from 'react';
import './DisplayMovies.css'

function DisplayMovies({ movies }) {
  return (
    <div className="DisplayMovies">
      <h1 className="movieTitle">{movies.title.replace(/_/g," ")}</h1>
      <img className="movieImg"
        src={movies.posterUrl}
        alt={movies.title.replace(/_/g," ")}
      />
      <p className="movieTxt">By {movies.director.replace(/_/g," ")}, in {movies.year}</p>
    </div>
  );
};

export default DisplayMovies;