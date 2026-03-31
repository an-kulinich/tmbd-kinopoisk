import React, { useState } from "react";
import s from "./searchElement.module.css";

type Props = {
    onSearchSubmit: (query: string) => void;
    query?: string;
    onClear?: () => void;
};

export const SearchElement = ({ onSearchSubmit, query, onClear }: Props) => {
    const [inputValue, setInputValue] = useState(query ?? "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);

        // При очистке инпута (крестиком) сразу сбрасываем результаты
        if (!nextValue) {
            onClear?.();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearchSubmit(inputValue.trim())
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
                <button
                    type="submit"
                    className={s.search_btn}
                    disabled={!inputValue.trim()}
                >
                    Search
                </button>
            </div>
        </form>
    );
};