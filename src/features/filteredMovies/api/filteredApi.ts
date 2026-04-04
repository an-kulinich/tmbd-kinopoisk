import { baseApi } from "@/app/baseApi"
import type { FilteredResponse } from "@/features/filteredMovies/lib/types.ts"


export const genreMap: Record<string, number> = {
    'Action': 28,
    'Adventure': 12,
    'Animation': 16,
    'Comedy': 35,
    'Crime': 80,
    'Documentary': 99,
    'Drama': 18,
    'Family': 10751,
    'Fantasy': 14,
    'History': 36,
    'Horror': 27,
    'Music': 10402,
    'Mystery': 9648,
    'Romance': 10749,
    'Science Fiction': 878,
    'TV Movie': 10770,
    'Thriller': 53,
    'War': 10752,
    'Western': 37
}

export type FilteredMoviesArgs = {
    page: number,
    sortBy?: string,
    ratingRange?: number[],
    genreIds?: number[]
}

export const filteredApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilteredMovies: build.query<FilteredResponse, FilteredMoviesArgs>({
            query: ({ page, sortBy, ratingRange, genreIds }) => {
                const params: Record<string, string | number> = {
                    language: 'en-US',
                    page,
                };

                if (sortBy) {
                    params.sort_by = sortBy
                }

                if (ratingRange && ratingRange.length === 2) {
                    if (ratingRange[0] > 0) params['vote_average.gte'] = ratingRange[0]
                    if (ratingRange[1] < 10) params['vote_average.lte'] = ratingRange[1]
                }

                if (genreIds && genreIds.length) {
                    params.with_genres = genreIds.join(',')
                }

                return {
                    url: `/discover/movie`,
                    params,
                };
            },
            providesTags: ["FilteredMovies"],
        }),
    }),
})

export const { useGetFilteredMoviesQuery } = filteredApi