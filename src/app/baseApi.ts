import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "tmdbApi",
    tagTypes: ["Popular", "TopRated", "Upcoming", "NowPlaying", "Details", "Cast", "Similar", "Search", "FilteredMovies"],
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            prepareHeaders: (headers) => {
                headers.set('accept', 'application/json');
                headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_KEY}`);
                return headers;
            },
        })(args, api, extraOptions)

        return result
    },
    endpoints: () => ({}),
})