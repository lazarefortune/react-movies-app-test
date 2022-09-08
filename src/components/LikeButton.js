import {addLike, removeLike} from "../features/movies/movieSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const LikeButton = ({ movie }) => {

    const [like, setLike] = useState(false);

    const dispatch = useDispatch();

    const handleLike = () => {
        setLike(!like);
        dispatch(addLike(movie.id));
    }

    const handleDislike = () => {
        setLike(!like);
        dispatch(removeLike(movie.id));
    }

    return (
        <div className="like-button">
            {like ? (
                <button className="btn btn__dislike" onClick={handleDislike}>Je n'aime plus</button>
            ) : (
                <button className="btn btn__like" onClick={handleLike}>J'aime</button>
            )}
        </div>
    )
}