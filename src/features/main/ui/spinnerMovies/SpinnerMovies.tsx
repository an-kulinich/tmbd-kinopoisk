import s from "./spinnerMovies.module.css"
import {Card} from "@/common/components/card/Card.tsx"
import type {
    NowPlayingMoviesResponse,
    PopularMoviesResponse,
    TopRatedMoviesResponse,
    UpcomingMoviesResponse
} from "@/common/types/types.ts"
import {Link} from "react-router"
import {Path} from "@/common/routing/Routing.tsx"

type Props = {
    data?: PopularMoviesResponse | NowPlayingMoviesResponse | UpcomingMoviesResponse | TopRatedMoviesResponse
    category: string,
    title: string,
}

export const SpinnerMovies = ({data, category, title}: Props) => {

    return (
        <div className={s.spinner_container}>
            <div className={s.content_wrapper}>
                <div className={s.description_wrapper}>
                <span className={s.movie_title}>
                    {title}
                </span>
                    <Link to={`/${Path.CategoryMovies}/${category}`}>
                        <button className={s.view_more_btn}>
                            View more
                        </button>
                    </Link>
                </div>
                <div className={s.movies_wrapper}>
                    {data?.results?.slice(0, 6).map(movie => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </div>
    );
};