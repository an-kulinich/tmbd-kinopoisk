import { NavLink } from "react-router";
import { Path } from "@/common/routing/Routing.tsx";
import s from "./header.module.css"
import logo from "@/assets/img/logo/logo.svg"
import {Switch} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {selectTheme, toggleTheme} from "@/app/app-slice.ts";

export const Header = () => {

    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    const handleChange = () => {
        dispatch(toggleTheme());
    }

    return (
        <div className={s.header_container}>
            <div className={s.content_wrapper}>
                <div className={s.logo_container}>
                    <img src={logo} alt="logo" style={{ height: '20px' }} />
                </div>
                <nav className={s.links_container}>
                    <NavLink to={Path.Main} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Main</NavLink>
                    <span className={s.separate_line}>|</span>
                    <NavLink to={Path.CategoryMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Category Movies</NavLink>
                    <span className={s.separate_line}>|</span>
                    <NavLink to={Path.FilteredMovies} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Filtered Movies</NavLink>
                    <span className={s.separate_line}>|</span>
                    <NavLink to={Path.Search} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Search</NavLink>
                    <span className={s.separate_line}>|</span>
                    <NavLink to={Path.Favorites} className={({ isActive }) => isActive ? s.active_page_link : s.page_link}>Favorites</NavLink>
                </nav>
                <div className={s.theme_icon}>
                    <span>Dark theme</span>
                    <Switch
                        checked={theme === "dark"}
                        onChange={handleChange}
                        slotProps={{ input: { 'aria-label': 'controlled' } }}
                    />
                </div>
            </div>
        </div>
    );
};