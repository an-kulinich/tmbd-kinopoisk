import s from './card.module.css'
import type {Movie} from "@/common/types/types.ts"
import noPoster from "@/assets/img/noPoster/noPoster.png"
import {useNavigate} from "react-router"
import {useAppDispatch, useAppSelector} from "@/common/hooks"
import {selectIsFavorite, toggleFavoriteAC} from "@/features/favorites/model/favoritesSlice.ts"

type Props = {
    movie: Movie
}

export const Card = ({movie}: Props) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const isLiked = useAppSelector((state) => selectIsFavorite(state, movie.id));

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleFavoriteAC({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average
        }));
    };

    const redirectToMovie = () => {
        navigate(`/movie/${movie.id}`); // Переход на страницу фильма
    };

    const getRatingClass = () => {
        if (movie.vote_average < 5) return s.rating_red;
        if (movie.vote_average < 7) return s.rating_yellow;
        return s.rating_green;
    };

    const getPoster = () => {
        if (movie.poster_path) {
            return `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
        }
        return `url(${noPoster})`; //заглушка
    }

    return (
        <div className={s.card_wrapper} onClick={redirectToMovie}>
            <div className={s.card} style={{ backgroundImage: getPoster() }}>
                <button className={`${s.like_btn} ${s.hidden} ${isLiked ? s.always_visible : ''}`} onClick={handleLikeClick}>
                    <svg className={s.heart_icon} viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
                <div className={`${s.rating} ${getRatingClass()}`}>{movie.vote_average.toFixed(1)}</div>
            </div>
            <span className={s.movie_title}>{movie.title}</span>
        </div>
    );
};