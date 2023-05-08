import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllMovies, fetchAllShows } from "../action";
import MovieListing from "../MovieListing";
const Home = () => {
  let dispatch = useDispatch();
  const [val, setVal] = useState("");
  //console.log(val)
  useEffect(() => {
    dispatch(fetchAllMovies("fast"));
    dispatch(fetchAllShows("fast"));
  }, [dispatch]);
  const get = () => {
    dispatch(fetchAllMovies(val));
    dispatch(fetchAllShows(val));
  };
  return (
    <div className="input">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Enter Movie or Series"
        aria-label="Enter Movie"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-light"
        type="button"
        id="button-addon2"
        onClick={get}
      >
        Search
      </button>
      <MovieListing />
    </div>
  );
};

export default Home;
