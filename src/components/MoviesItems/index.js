import "./index.css";
import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function MoviesItems(props) {
  const { movie } = props;
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <h2 className="movie-title">{movie.Title}</h2>
      <div>
        <img alt={`The movie titled: ${movie.Title}`} src={poster} />
      </div>
      <p className="movie-year">({movie.Year})</p>
    </div>
  );
}

export default MoviesItems;
