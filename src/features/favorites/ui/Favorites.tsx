// src/features/favorites/ui/Favorites.tsx
import s from './favorites.module.css';
import { Link } from 'react-router';
import { Card } from '@/common/components/card/Card';
import {useAppSelector} from "@/common/hooks";
import {type FavoriteMovie, selectFavorites} from "@/features/favorites/model/favoritesSlice.ts";
import type {Movie} from "@/common/types/types.ts";

export const Favorites = () => {
    const favorites: FavoriteMovie[] = useAppSelector(selectFavorites);

    if (favorites.length === 0) {
        return (
            <div className={s.empty_favorites}>
                <h2>There's nothing here</h2>
                <p>Add movies to favorites</p>
                <Link to="/" className={s.home_link}>Home page</Link>
            </div>
        );
    }

    return (
        <div className={s.favorites_container}>
            <div className={s.content_wrapper}>
                <h2 className={s.title}>Favorites movies</h2>
                <div className={s.cards_wrapper}>
                    {favorites.map(movie => (
                        <Card key={movie.id} movie={movie as Movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};