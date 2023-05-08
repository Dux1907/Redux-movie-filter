import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  shows: [],
  selected: [],
};
export const fetchAllMovies = createAsyncThunk(
  "fetchAllMovies",
  async (value) => {
    if (value !== undefined) {
      try {
        let a = await fetch(
          `http://www.omdbapi.com/?s=${value}&apikey=a41e6e50&type=movie`
        );
        let b = await a.json();
        return b;
      } catch (error) {
        console.log("Error: " + error);
      }
    }
  }
);

export const fetchAllShows = createAsyncThunk(
  "fetchAllShows",
  async (value) => {
    if (value !== undefined) {
      try {
        let a = await fetch(
          `http://www.omdbapi.com/?s=${value}&apikey=a41e6e50&type=series`
        );
        let b = await a.json();
        return b;
      } catch (error) {
        console.log("Error: " + error);
      }
    }
  }
);
export const fetchSelectedMovie = createAsyncThunk(
  "fetchSelectedMovie",
  async (id) => {
    try {
      let a = await fetch(`http://www.omdbapi.com/?s=&apikey=a41e6e50&i=${id}`);
      let b = await a.json();
      return b;
    } catch (error) {
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovie: (state) => {
      state.selected = {};
    },
  },
  extraReducers: {
    [fetchAllMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAllMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAllMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAllShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchSelectedMovie.fulfilled]: (state, { payload }) => {
      return { ...state, selected: payload };
    },
  },
});

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});
export default store;
export const { removeMovie } = movieSlice.actions;
