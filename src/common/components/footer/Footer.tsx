import s from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={s.footer_container}>
            <span>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</span>
        </footer>
    );
};