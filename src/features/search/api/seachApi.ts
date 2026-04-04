import { baseApi } from "@/app/baseApi"
import type { SearchResponse } from "@/features/search/lib"

export const searchApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        searchMovies: build.query<SearchResponse, { searchQuery: string; page: number }>({
            query: ({ searchQuery, page }) => ({
                url: `/search/movie`,
                params: {
                    query: searchQuery,
                    language: 'en-US',
                    page,
                },
            }),
            providesTags: ["Search"],
        }),
    }),
});

export const { useSearchMoviesQuery } = searchApi