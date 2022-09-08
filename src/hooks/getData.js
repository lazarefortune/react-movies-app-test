import data from "../data/movies";

export const getData = () => {

    let oldMovies = data.filter((movie, index, self) =>
        index === self.findIndex((m) => (
            m.id === movie.id
        ))
    );

    // add likes to movies
    let movies = oldMovies.map(movie => {
        return {
            ...movie,
            likes: 0
        }
    });

    return { movies };
}
