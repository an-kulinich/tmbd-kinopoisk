import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

export type AppState = {
    theme: Theme;
};

const initialState: AppState = {
    theme: "light",
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    selectors: {
        selectTheme: (state) => state.theme
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
});

export const { selectTheme } = appSlice.selectors

export const { setTheme, toggleTheme } = appSlice.actions

export const appReducer = appSlice.reducer
