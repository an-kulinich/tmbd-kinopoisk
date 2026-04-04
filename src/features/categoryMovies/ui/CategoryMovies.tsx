import s from "./categoryMovies.module.css"
import {NavLink, Outlet} from "react-router"
import {Path} from "@/common/routing/Routing.tsx"

export const CategoryMovies = () => {
    return (
        <div className={s.links_container}>
            <nav className={s.links_wrapper}>
                <NavLink to={Path.PopularMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link} end>Popular Movies</NavLink>

                <NavLink to={Path.TopRatedMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Top Rated Movies</NavLink>

                <NavLink to={Path.UpcomingMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Upcoming Movies</NavLink>

                <NavLink to={Path.NowPlayingMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Now Playing Movies</NavLink>
            </nav>
            <div className={s.movies_container}>
                <Outlet />
            </div>
        </div>
    );
};