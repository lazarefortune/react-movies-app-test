import {createSlice} from "@reduxjs/toolkit";
import {getData} from "../../hooks/getData";

const { movies } = getData();

const initialState = {
    movies: movies,
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addLike: (state, action) => {
            state.movies = state.movies.map(movie => {
                if (movie.id === action.payload) {
                    return {
                        ...movie,
                        likes: movie.likes + 1
                    }
                }
                return movie
            })
        },
        removeLike: (state, action) => {
            state.movies = state.movies.map(movie => {
                if (movie.id === action.payload) {
                    return {
                        ...movie,
                        likes: movie.likes - 1
                    }
                }
                return movie
            })
        }
    }
});

export const { addLike, removeLike } = movieSlice.actions;

export default movieSlice.reducer;