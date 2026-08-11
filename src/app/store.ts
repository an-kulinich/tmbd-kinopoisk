import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import {baseApi} from "@/app/baseApi.ts"
import {favoritesReducer} from "@/features/favorites/model/favoritesSlice.ts"
import {appReducer} from "@/app/app-slice.ts";
import { loadTheme, saveTheme } from "@/app/theme-storage.ts";

export const store = configureStore({
    reducer: {
        app: appReducer,
        favorites: favoritesReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    preloadedState: {
        app: {
            theme: loadTheme(),
        },
    },
})

setupListeners(store.dispatch)

let currentTheme = store.getState().app.theme;

store.subscribe(() => {
    const nextTheme = store.getState().app.theme;

    if (nextTheme !== currentTheme) {
        currentTheme = nextTheme;
        saveTheme(nextTheme);
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
