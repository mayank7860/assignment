import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./IndMovie.css";
import { useParams, Link } from "react-router-dom";

function IndMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = "api_key=67011cf113627fe3311316af752fbcc5";
  const Api_URL = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  // const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    const { results } = data;
    const sameData = results.find((item) => item.id === parseInt(id));
    setMovie(sameData);
  };

  useEffect(() => {
    getMovie(movie);
  }, []);

  console.log(movie);

  return (
    <div className="container indMovieinfo">
      <div className="row movieCard">
        <div className="col movieInformation">
          <Link to={"/"}>
            <KeyboardBackspaceIcon />
          </Link>

          <h1>{movie.original_title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <p>
            Release Date:<span>{movie.release_date}</span>
          </p>
          <p>
            Orignal Language: <span>{movie.original_language}</span>
          </p>
        </div>
        <div className="col image-conatainer">
          <img src={imageBaseUrl + movie.backdrop_path} alt="movie banner" />
        </div>
      </div>
    </div>
  );
}

export default IndMovie;
