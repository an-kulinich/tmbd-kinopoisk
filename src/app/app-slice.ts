import {createSlice} from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        theme: (localStorage.getItem('theme') as Theme) || "light",
    },
    selectors: {
        selectTheme: (state) => state.theme
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);

            if (state.theme === 'dark') {
                console.log("dark");
            } else {
                console.log("light");
            }
        }
    },
});

export const { selectTheme } = appSlice.selectors

export const { toggleTheme } = appSlice.actions

export const appReducer = appSlice.reducer