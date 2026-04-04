export type DateRange = {
    maximum: string,
    minimum: string
}

export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type PaginatedResponse<T> = {
    page: number,
    results: T[],
    total_pages: number,
    total_results: number
}

export interface PaginatedResponseWithDates<T> extends PaginatedResponse<T> {
    dates: DateRange
}

// Для популярных фильмов (без dates)
export type PopularMoviesResponse = PaginatedResponse<Movie>

// Для фильмов в прокате (с dates)
export type NowPlayingMoviesResponse = PaginatedResponseWithDates<Movie>

// Для предстоящих фильмов (с dates)
export type UpcomingMoviesResponse = PaginatedResponseWithDates<Movie>

// Для фильмов с высоким рейтингом (без dates)
export type TopRatedMoviesResponse = PaginatedResponse<Movie>