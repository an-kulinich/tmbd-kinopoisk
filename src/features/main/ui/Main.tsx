import {SpinnerMovies} from "./spinnerMovies/SpinnerMovies.tsx";
import {Welcome} from "./welcome/Welcome.tsx";
import s from "./main.module.css"
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/main/api/mainApi.ts";

export const Main = () => {

    const { data: PopularMovies } = useGetPopularMoviesQuery(1)
    const { data: TopRatedMovies} = useGetTopRatedMoviesQuery(1)
    const { data: UpcomingMovies } = useGetUpcomingMoviesQuery(1)
    const { data: NowPlayingMovies } = useGetNowPlayingMoviesQuery(1)

    return (
        <div className={s.main_container}>
            <div className={s.content_wrapper}>
                <Welcome/>
                <SpinnerMovies data={PopularMovies} category={'popular'} title={"Popular Movies"}/>
                <SpinnerMovies data={TopRatedMovies} category={'top-rated'} title={"Top Rated Movies"}/>
                <SpinnerMovies data={UpcomingMovies} category={'upcoming'} title={"Upcoming Movies"}/>
                <SpinnerMovies data={NowPlayingMovies} category={'now-playing'} title={"Now Playing Movies"}/>
            </div>
        </div>
    )
}