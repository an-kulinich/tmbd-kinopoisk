import React, { useState } from "react";
import s from "./searchElement.module.css";

type Props = {
    onSearchSubmit: (query: string) => void;
};

export const SearchElement = ({ onSearchSubmit }: Props) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearchSubmit(inputValue.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.search_form}>
            <div className={s.search_container}>
                <input
                    type="search"
                    className={s.search_request}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search for a movie"
                />
                <button type="submit" className={s.search_btn}>
                    Search
                </button>
            </div>
        </form>
    );
};