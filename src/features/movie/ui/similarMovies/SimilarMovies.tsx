import s from './similarMovies.module.css'
import type {SimilarMoviesResponse} from "@/features/movie/lib";
import {Card} from "@/common/components/card/Card.tsx";

type Props = {
    data: SimilarMoviesResponse | undefined,
}

export const SimilarMovies = ({data}: Props) => {
    console.log(data)
    return (
        <div className={s.similar_wrapper}>
            <h3>Similar Movies</h3>
            <div className={s.movies_wrapper}>
                {data?.results?.slice(0, 6).map(movie => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};