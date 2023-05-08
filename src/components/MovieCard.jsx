import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { user } = props;
  return (
    <div
      className="col-md-3 col-sm-4 col-5 text-light fs-4 box"
      style={{ marginBottom: "1.4rem", marginTop: "1rem" }}
    >
      <Link to={`/movie/${user.imdbID}`}>
        <img
          src={user.Poster}
          alt={user.Title}
                  style={{ height: "400px", width: "auto" }}
                  className = 'img-fluid'
        />
        <div className="title ">{user.Title}</div>
        <div className="year">{user.Year}</div>
      </Link>
    </div>
  );
};

export default MovieCard;
