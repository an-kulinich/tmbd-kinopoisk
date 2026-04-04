import { useMemo, useState } from 'react'
import { Box, Paper } from '@mui/material'
import { genreMap, useGetFilteredMoviesQuery } from "@/features/filteredMovies/api/filteredApi.ts"
import {SortedMovies} from "@/features/filteredMovies/ui/sortedMovies/SortedMovies.tsx"
import {FilteredMoviesSettings} from "@/features/filteredMovies/ui/filteredMoviesSettings/FilteredMoviesSettings.tsx"

export const FilteredMovies = () => {
    // Состояния фильтров
    const [sortBy, setSortBy] = useState('popularity_desc')
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10])
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    // Преобразование выбранных жанров в массив ID
    const genreIds = useMemo(() => {
        return selectedGenres.map(genre => genreMap[genre]).filter(id => id !== undefined)
    }, [selectedGenres])

    const getSortByParam = (sortValue: string): string => {
        const map: Record<string, string> = {
            popularity_desc: 'popularity.desc',
            popularity_asc: 'popularity.asc',
            rating_desc: 'vote_average.desc',
            rating_asc: 'vote_average.asc',
            release_date_desc: 'release_date.desc',
            release_date_asc: 'release_date.asc',
            title_a_z: 'original_title.asc',
            title_z_a: 'original_title.desc',
        }
        return map[sortValue] || 'popularity.desc'
    };

    const queryArgs = useMemo(() => ({
        page: currentPage,
        sortBy: getSortByParam(sortBy),
        ratingRange: ratingRange,
        genreIds: genreIds.length ? genreIds : undefined,
    }), [currentPage, sortBy, ratingRange, genreIds])

    const { data } = useGetFilteredMoviesQuery(queryArgs)

    // Обработчики
    const handleSortChange = (value: string) => {
        setSortBy(value)
        setCurrentPage(1)
    };

    const handleRatingChange = (newValue: number | number[]) => {
        setRatingRange(newValue as number[])
        setCurrentPage(1)
    };

    const handleGenreToggle = (genre: string) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
        setCurrentPage(1)
    };

    const handleReset = () => {
        setSortBy('popularity_desc')
        setRatingRange([0, 10])
        setSelectedGenres([])
        setCurrentPage(1)
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '1200px', display: 'flex' }}>
                <FilteredMoviesSettings
                    sortBy={sortBy}
                    onSortChange={handleSortChange}
                    ratingRange={ratingRange}
                    onRatingChange={handleRatingChange}
                    selectedGenres={selectedGenres}
                    onGenreToggle={handleGenreToggle}
                    onReset={handleReset}
                />
                <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', width: '75%' }}>
                    <SortedMovies data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Paper>
            </Box>
        </Box>
    );
};