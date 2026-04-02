import { SpinnerMovies } from "./spinnerMovies/SpinnerMovies.tsx";
import { Welcome } from "./welcome/Welcome.tsx";
import {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery
} from "@/features/main/api/mainApi.ts";
import { useMemo } from "react";

export const Main = () => {
    const { data: PopularMovies } = useGetPopularMoviesQuery(1);
    const { data: TopRatedMovies } = useGetTopRatedMoviesQuery(1);
    const { data: UpcomingMovies } = useGetUpcomingMoviesQuery(1);
    const { data: NowPlayingMovies } = useGetNowPlayingMoviesQuery(1);

    // Мемоизируем случайную картинку, чтобы она не менялась при ререндерах
    const randomBackgroundImage = useMemo(() => {
        if (PopularMovies?.results && PopularMovies.results.length > 0) {
            const moviesWithBackdrop = PopularMovies.results.filter(
                movie => movie.backdrop_path
            );

            if (moviesWithBackdrop.length > 0) {
                const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
                const randomMovie = moviesWithBackdrop[randomIndex];
                return `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
            }
        }
        return "";
    }, [PopularMovies]); // Зависимость только от PopularMovies

    return (
        <>
            <Welcome backgroundImage={randomBackgroundImage} />
            <SpinnerMovies
                data={PopularMovies}
                category={"popular"}
                title={"Popular Movies"}
            />
            <SpinnerMovies
                data={TopRatedMovies}
                category={"top-rated"}
                title={"Top Rated Movies"}
            />
            <SpinnerMovies
                data={UpcomingMovies}
                category={"upcoming"}
                title={"Upcoming Movies"}
            />
            <SpinnerMovies
                data={NowPlayingMovies}
                category={"now-playing"}
                title={"Now Playing Movies"}
            />
        </>
    );
};