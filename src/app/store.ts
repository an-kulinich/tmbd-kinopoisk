import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import {baseApi} from "@/app/baseApi.ts"
import {favoritesReducer} from "@/features/favorites/model/favoritesSlice.ts"
import {appReducer} from "@/app/app-slice.ts";

export const store = configureStore({
    reducer: {
        app: appReducer,
        favorites: favoritesReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch