import Modal from "../../components/Modal";
import useImageApi from "../../hooks/useImageApi";
import {useData} from "../../hooks/useData";
import {Header} from "../../components/Header";

const MoviesList = () => {

    const { images, loading, error, fetchImages } = useImageApi();

    const { movies } = useData();

    return (
        <>
            <Header/>
            <div className="container">
                <h1 className="movie__title">Movies List</h1>

                <div className="movie__list">
                    {movies.map((movie) => (
                        <div className="movie__item" key={movie.id}>
                            <h1> {movie.title} </h1>
                            <Modal>
                                <div className="">
                                    <h1>{movie.title}</h1>
                                    <img src="https://via.placeholder.com/150" alt=""/>
                                    <p>{movie.overview}</p>
                                </div>
                            </Modal>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default MoviesList