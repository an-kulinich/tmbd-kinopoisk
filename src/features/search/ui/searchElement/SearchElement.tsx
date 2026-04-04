import { useState } from "react"
import s from "./searchElement.module.css"
import type { ChangeEvent, MouseEvent } from "react"

type Props = {
    onSearchSubmit: (query: string) => void,
    query?: string,
    onClear?: () => void
}

export const SearchElement = ({ onSearchSubmit, query, onClear }: Props) => {
    const [inputValue, setInputValue] = useState(query ?? "")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value
        setInputValue(nextValue)

        if (!nextValue && onClear) {
            onClear()
        }
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onSearchSubmit(inputValue.trim())
        }
    }

    return (
        <div className={s.search_form}>
            <div className={s.search_container}>
                <input
                    type="search"
                    className={s.search_request}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search for a movie"
                />
                <button
                    type="button"
                    className={s.search_btn}
                    onClick={handleSubmit}
                    disabled={!inputValue.trim()}
                >
                    Search
                </button>
            </div>
        </div>
    );
};