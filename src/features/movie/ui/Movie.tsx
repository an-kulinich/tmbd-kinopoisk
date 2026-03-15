import s from "./movie.module.css";
import {useGetCastQuery, useGetDetailsQuery, useGetSimilarQuery} from "@/features/movie/api/movieApi.ts";
import {useParams} from "react-router";
import {MovieDescription} from "@/features/movie/ui/movieDescription/MovieDescription.tsx";
import {Cast} from "@/features/movie/ui/cast/Cast.tsx";
import {SimilarMovies} from "@/features/movie/ui/similarMovies/SimilarMovies.tsx";

export const Movie = () => {

    const { movieId } = useParams();
    const { data: MovieDetails } = useGetDetailsQuery(movieId)
    const { data: CastDetails } = useGetCastQuery(movieId)
    const { data: SimilarData } = useGetSimilarQuery(movieId)

    return (
        <div className={s.movie_container}>
            <div className={s.content_wrapper}>
                <MovieDescription data={MovieDetails} />
                <Cast data={CastDetails} />
                <SimilarMovies data={SimilarData} />
            </div>
        </div>
    );
};