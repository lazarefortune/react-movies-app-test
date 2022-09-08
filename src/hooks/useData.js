import data from "../data/movies";

export const useData = () => {

    const movies = data.filter((movie, index, self) =>
        index === self.findIndex((m) => (
            m.id === movie.id
        ))
    );

    return { movies };
}
