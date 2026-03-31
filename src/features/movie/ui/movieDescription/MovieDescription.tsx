import s from "./movieDescription.module.css";
import type {MovieDetailsResponse} from "@/features/movie/lib";
import {useNavigate} from "react-router";

type Props = {
    data: MovieDetailsResponse | undefined;
}

export const MovieDescription = ({data}: Props) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className={s.movie_wrapper}>
            <div className={s.poster_wrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="poster" className={s.poster}/>
            </div>
            <div className={s.description_wrapper}>

                <div className={s.movie_title_wrapper}>
                    <h2 className={s.movie_title}>{data?.original_title}</h2>
                    <button className={s.back_btn} onClick={goBack}>Back</button>
                </div>

                <div className={s.info_block}>
                    <span className={s.info_text}>Release year: {data?.release_date.slice(0, 4)}</span>
                    <div className={s.rating}>{data?.vote_average.toFixed(1)}</div>
                    <span className={s.info_text}>Runtime: {data?.runtime} min</span>
                </div>

                <span className={s.movie_description}>{data?.overview}</span>
                <h4>Genres</h4>
                <div className={s.genres_wrapper}>
                    {data?.genres.map((g) => {
                        return (
                            <div className={s.genres_type} key={g.id}>
                                {g.name}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};