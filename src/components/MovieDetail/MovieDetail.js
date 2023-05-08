import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSelectedMovie, removeMovie } from "../action";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.movies.selected);
  //console.log(product);
  useEffect(() => {
    dispatch(fetchSelectedMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [dispatch, id]);
  // console.log(product)
  return (
    <div className="container m-5">
      <div className="row justify-content-center text-center">
        {Object.keys(product).length > 0 ? (
          <>
            <div className="col-sm-6 col-10 mb-5">
              <img src={product.Poster} alt={product.title} className = 'img-fluid' />
            </div>
            <div className="col-sm-6 col-10 fs-3 text-white">
              <div className="title">
                <span className="fw-bold">Title: </span>
                {product.Title}
              </div>
              <div className="date">
                <span className="fw-bold">Release Date: </span>
                {product.Released}
              </div>
              <div className="runtime">
                <span className="fw-bold">Runtime: </span>
                {product.Runtime}
              </div>
              <div className="genre">
                <span className="fw-bold">Genre: </span>
                {product.Genre}
              </div>
              <div className="actors">
                <span className="fw-bold">Actors: </span>
                {product.Actors}
              </div>
              <div className="plot">
                <span className="fw-bold">Plot: </span>
                {product.Plot}
              </div>
              <div className="ratings">
                <span className="fw-bold">Imdb: </span>
                {product.imdbRating}
              </div>
            </div>
          </>
        ) : (
          <h3 className="loading text-white">Loading.....</h3>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
