import { createSlice } from '@reduxjs/toolkit';

export type FavoriteMovie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};

// Функция для загрузки данных из localStorage
const loadFavoritesFromStorage = (): FavoriteMovie[] => {
    try {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Failed to load favorites from localStorage:', error);
        return [];
    }
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: loadFavoritesFromStorage(),
    },
    selectors: {
        selectFavorites: (state) => state.items,
        selectIsFavorite: (state, movieId: number) => state.items.some(movie => movie.id === movieId)
    },
    reducers: {
        toggleFavoriteAC: (state, action: { payload: FavoriteMovie }) => {
            const index = state.items.findIndex(movie => movie.id === action.payload.id);

            if (index === -1) {
                state.items.push(action.payload);
            } else {
                state.items.splice(index, 1);
            }

            localStorage.setItem('favorites', JSON.stringify(state.items));
        }
    },
});

export const { selectFavorites, selectIsFavorite} = favoritesSlice.selectors

export const {toggleFavoriteAC} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;