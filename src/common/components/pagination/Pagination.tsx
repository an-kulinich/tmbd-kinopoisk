import type {
    NowPlayingMoviesResponse,
    PopularMoviesResponse,
    TopRatedMoviesResponse,
    UpcomingMoviesResponse
} from "@/common/types/types.ts";
import s from "./pagination.module.css"
import type {SearchResponse} from "@/features/search/lib";

type Props = {
    data: PopularMoviesResponse | TopRatedMoviesResponse | NowPlayingMoviesResponse | UpcomingMoviesResponse | SearchResponse | undefined,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
}

export const Pagination = ({data, currentPage, setCurrentPage}: Props) => {

    const goToPage = (page: number) => {
        setCurrentPage(page)
    };

    // Функция для генерации массива номеров страниц
    const getPageNumbers = () => {
        if (!data) return []

        const totalPages = data.total_pages
        const maxVisiblePages = 5 // Максимальное количество отображаемых страниц
        let pages: (number | string)[] = []

        if (totalPages <= maxVisiblePages) {
            // Если страниц меньше 5, показываем все
            pages = Array.from({ length: totalPages }, (_, i) => i + 1)
        } else {
            // Всегда показываем первую страницу
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...')
            }

            // Показываем страницы вокруг текущей
            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            if (currentPage < totalPages - 2) {
                pages.push('...')
            }

            // Всегда показываем последнюю страницу
            if (totalPages > 1) {
                pages.push(totalPages)
            }
        }

        return pages
    };

    return (
        <>
            {data && data.total_pages > 1 && (
                <div className={s.pagination_container}>
                    <div className={s.page_numbers}>
                        {getPageNumbers().map((page, index) => (
                            page === '...' ? (
                                <span key={`dots-${index}`} className={s.pagination_dots}>...</span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page as number)}
                                    className={`${s.page_button} ${currentPage === page ? s.active_page : ''}`}
                                >
                                    {page}
                                </button>
                            )
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};