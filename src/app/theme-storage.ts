import type { Theme } from "@/app/app-slice.ts";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

const isTheme = (value: string | null): value is Theme => {
    return value === "light" || value === "dark";
};

export const loadTheme = (): Theme => {
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

        return isTheme(savedTheme) ? savedTheme : DEFAULT_THEME;
    } catch {
        return DEFAULT_THEME;
    }
};

export const saveTheme = (theme: Theme) => {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Недоступное хранилище не должно мешать работе приложения.
    }
};
