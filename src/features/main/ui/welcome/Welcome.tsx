import s from "./welcome.module.css"
import { useState } from "react"
import { useNavigate } from "react-router"
import type { ChangeEvent, MouseEvent } from "react"

type Props = {
    backgroundImage?: string
}

export const Welcome = ({ backgroundImage }: Props) => {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (inputValue.trim()) {
            navigate(`/search?query=${encodeURIComponent(inputValue)}`)
        }
    }

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
            </div>
        </div>
    );
};