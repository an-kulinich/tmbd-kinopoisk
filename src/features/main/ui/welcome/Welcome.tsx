import s from "./welcome.module.css";
import {SearchElement} from "@/common/components/searchElement/SearchElement.tsx";

export const Welcome = () => {
    return (
        <div className={s.welcome_container}>
            <span className={s.welcome}>Welcome</span>
            <h1 className={s.title}>Browse highlighted titles from TMDB</h1>
            <SearchElement/>
        </div>
    );
};