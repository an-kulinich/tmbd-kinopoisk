import {baseApi} from "@/app/baseApi.ts"
import type {
    NowPlayingMoviesResponse,
    PopularMoviesResponse,
    TopRatedMoviesResponse,
    UpcomingMoviesResponse
} from "@/common/types/types.ts"

export const mainApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<PopularMoviesResponse, number>({
            query: (page = 1) => `/movie/popular?page=${page}`,
            providesTags: ["Popular"],
        }),
        getTopRatedMovies: build.query<TopRatedMoviesResponse, number>({
            query: (page = 1) => `/movie/top_rated?page=${page}`,
            providesTags: ["TopRated"],
        }),
        getUpcomingMovies: build.query<UpcomingMoviesResponse, number>({
            query: (page = 1) => `/movie/upcoming?page=${page}`,
            providesTags: ["Upcoming"],
        }),
        getNowPlayingMovies: build.query<NowPlayingMoviesResponse, number>({
            query: (page = 1) => `/movie/now_playing?page=${page}`,
            providesTags: ["NowPlaying"],
        }),
    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery
} = mainApi