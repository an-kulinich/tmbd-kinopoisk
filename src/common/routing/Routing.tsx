import {Navigate, Route, Routes} from "react-router";
import {Main} from "@/features/main/ui/Main.tsx";
import {CategoryMovies} from "@/features/categoryMovies/ui/CategoryMovies.tsx";
import {Popular} from "@/features/categoryMovies/ui/popular/Popular.tsx";
import {TopRated} from "@/features/categoryMovies/ui/topRated/TopRated.tsx";
import {Upcoming} from "@/features/categoryMovies/ui/upcoming/Upcoming.tsx";
import {NowPlaying} from "@/features/categoryMovies/ui/nowPlaying/NowPlaying.tsx";
import {FilteredMovies} from "@/features/filteredMovies/ui/FilteredMovies.tsx";
import {Search} from "@/features/search/ui/Search.tsx";
import {Favorites} from "@/features/favorites/ui/Favorites.tsx";
import {Movie} from "@/features/movie/ui/Movie.tsx";

export const Path = {
    Main: "/",
    CategoryMovies: "category",
    FilteredMovies: "filtered",
    Search: "search",
    Favorites: "favorites",
    PopularMovies: "popular",
    TopRatedMovies: "top-rated",
    UpcomingMovies: "upcoming",
    NowPlayingMovies: "now-playing",
    Movie: "/movie/:movieId",
    NotFound: "*",
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Main} element={<Main/>} />

            <Route path={Path.Movie} element={<Movie/>} />

            <Route path={Path.CategoryMovies} element={<CategoryMovies />}>
                <Route index element={<Navigate to={Path.PopularMovies} replace />} />
                <Route path={Path.PopularMovies} element={<Popular />} />
                <Route path={Path.TopRatedMovies} element={<TopRated />} />
                <Route path={Path.UpcomingMovies} element={<Upcoming />} />
                <Route path={Path.NowPlayingMovies} element={<NowPlaying />} />
            </Route>

            <Route path={Path.FilteredMovies} element={<FilteredMovies/>} />
            <Route path={Path.Search} element={<Search/>} />
            <Route path={Path.Favorites} element={<Favorites/>} />

        </Routes>
    );
};