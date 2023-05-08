import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieListing = () => {
  const product = useSelector((state) => state.movies);
  //console.log(product);
  //console.log(product);
  return (
    <div>
      {(product.movies.Response === 'True') ? (
        <>
          <h2>Movies</h2>
          <div className="container-fluid">
            <div className="row justify-content-center text-center ">
              {product.movies.Search.map((user, index) => {
                return <MovieCard key={index} user={user} />;
              })}
            </div>
          </div>
        </>
      ) : (
                  <div className="error">
          <h3>{product.error}</h3>
        </div>
      )}
      {( product.shows.Response === 'True') ? (
        <>
          <h2>Series</h2>
          <div className="container-fluid">
            <div className="row justify-content-center text-center ">
              {product.shows.Search.map((user, index) => {
                return <MovieCard key={index} user={user} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="error">
          <h3>{product.error}</h3>
        </div>
      )}
    </div>
  );
};

export default MovieListing;
