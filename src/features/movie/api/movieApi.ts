import {baseApi} from "@/app/baseApi.ts"
import type {CastResponse, MovieDetailsResponse, SimilarMoviesResponse} from "@/features/movie/lib"

export const mainApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDetails: build.query<MovieDetailsResponse, string | undefined>({
            query: (movie_id) => `/movie/${movie_id}`,
            providesTags: ["Details"],
        }),
        getCast: build.query<CastResponse, string | undefined>({
            query: (movie_id) => `/movie/${movie_id}/credits`,
            providesTags: ["Cast"],
        }),
        getSimilar: build.query<SimilarMoviesResponse, string | undefined>({
            query: (movie_id) => `/movie/${movie_id}/similar`,
            providesTags: ["Similar"],
        }),
    }),
})

export const {
    useGetDetailsQuery,
    useGetCastQuery,
    useGetSimilarQuery,
} = mainApi