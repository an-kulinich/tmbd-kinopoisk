import s from "./welcome.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

interface WelcomeProps {
    backgroundImage?: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ backgroundImage }) => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            navigate(`/search?query=${encodeURIComponent(inputValue)}`);
        }
    };

    return (
        <div
            className={s.welcome_container}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Затемнение фона */}
            <div className={s.overlay}></div>

            <div className={s.content_wrapper}>
                <span className={s.welcome}>Welcome</span>
                <h1 className={s.title}>Browse highlighted titles from TMDB</h1>
                <form onSubmit={handleSubmit} className={s.search_form}>
                    <div className={s.search_container}>
                        <input
                            type="search"
                            className={s.search_request}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Search for a movie"
                        />
                        <button
                            type="submit"
                            className={s.search_btn}
                            disabled={!inputValue.trim()}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};