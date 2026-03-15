import { useState } from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Slider,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Paper
} from '@mui/material';

// Список доступных жанров (на основе скриншота)
const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
    'Drama', 'Family','Fantasy', 'History', 'Horror','Music', 'Mystery', 'Romance',
    'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
];

export const FilteredMovies = () => {
    // Состояния фильтров
    const [sortBy, setSortBy] = useState('popularity_desc');
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    // Обработчики
    const handleSortChange = (event: any) => {
        setSortBy(event.target.value);
    };

    const handleRatingChange = (event: Event, newValue: number | number[]) => {
        setRatingRange(newValue as number[]);
    }

    const handleGenreToggle = (genre: string) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    const handleReset = () => {
        setSortBy('popularity_desc');
        setRatingRange([0, 10]);
        setSelectedGenres([]);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '1200px'}}>
                <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', width: '25%' }}>
                    {/* Заголовок */}
                    <Typography variant="h6" gutterBottom>
                        Filters / Sort
                    </Typography>

                    {/* Сортировка */}
                    <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                        <InputLabel id="sort-label">Sort by</InputLabel>
                        <Select
                            labelId="sort-label"
                            value={sortBy}
                            label="Sort by"
                            onChange={handleSortChange}
                        >
                            <MenuItem value="popularity_desc">Popularity ↓</MenuItem>
                            <MenuItem value="popularity_asc">Popularity ↑</MenuItem>
                            <MenuItem value="rating_desc">Rating ↓</MenuItem>
                            <MenuItem value="rating_asc">Rating ↑</MenuItem>
                            <MenuItem value="release_date_desc">Release Date ↓</MenuItem>
                            <MenuItem value="release_date_asc">Release Date ↑</MenuItem>
                            <MenuItem value="title_a_z">Title A-Z</MenuItem>
                            <MenuItem value="title_z_a">Title Z-A</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Диапазон рейтинга */}
                    <Box sx={{ mb: 3 }}>
                        <Typography gutterBottom>
                            Rating: {ratingRange[0].toFixed(1)} - {ratingRange[1].toFixed(1)}
                        </Typography>
                        <Slider
                            value={ratingRange}
                            onChange={handleRatingChange}
                            disableSwap
                            valueLabelDisplay="auto"
                            min={0}
                            max={10}
                            step={0.1}
                        />
                    </Box>

                    {/* Жанры в две колонки */}
                    <Typography variant="subtitle1" gutterBottom>
                        Genres
                    </Typography>
                    <Grid container spacing={1} sx={{ mb: 3 }}>
                        {genres.map(genre => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedGenres.includes(genre)}
                                            onChange={() => handleGenreToggle(genre)}
                                            size="small"
                                        />
                                    }
                                    label={genre}
                                />
                        ))}
                    </Grid>

                    {/* Кнопка сброса */}
                    <Button variant="outlined" onClick={handleReset} fullWidth>
                        Reset filters
                    </Button>
                </Paper>
            </Box>
        </Box>
    );
};