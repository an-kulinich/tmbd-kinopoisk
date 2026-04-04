import type {Movie, PaginatedResponse} from "@/common/types/types.ts"

// Тип для жанра
export type Genre = {
    id: number,
    name: string,
}

// Тип для компании производства
export type ProductionCompany = {
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string,
}

// Тип для страны производства
export type ProductionCountry = {
    iso_3166_1: string,
    name: string,
}

// Тип для языка
export type SpokenLanguage = {
    english_name: string,
    iso_639_1: string,
    name: string,
}

// Тип для конкретного фильма
export type MovieDetailsResponse = {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null,
    budget: number,
    genres: Genre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompany[],
    production_countries: ProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: SpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

//карточка актера
export type Cast = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

//Тип для актеров конкретного фильма
export type CastResponse = {
    id: number,
    cast: Cast[],
}

//Тип для похожих фильмов
export type SimilarMoviesResponse = PaginatedResponse<Movie>
