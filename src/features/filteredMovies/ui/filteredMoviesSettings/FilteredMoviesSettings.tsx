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
    Paper,
    type SelectChangeEvent
} from '@mui/material';

const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
    'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance',
    'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
];

type FilteredMoviesSettingsProps = {
    sortBy: string;
    onSortChange: (value: string) => void;
    ratingRange: number[];
    onRatingChange: (newValue: number | number[]) => void;
    selectedGenres: string[];
    onGenreToggle: (genre: string) => void;
    onReset: () => void;
};

export const FilteredMoviesSettings = ({sortBy, onSortChange, ratingRange, onRatingChange, selectedGenres, onGenreToggle, onReset
}: FilteredMoviesSettingsProps) => {

    const handleSelectChange = (event: SelectChangeEvent) => {
        onSortChange(event.target.value);
    };

    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        onRatingChange(newValue);
    };

    return (
        <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', width: '25%' }}>
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
                    onChange={handleSelectChange}
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
                    onChange={handleSliderChange}
                    disableSwap
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    step={0.1}
                />
            </Box>

            {/* Жанры */}
            <Typography variant="subtitle1" gutterBottom>
                Genres
            </Typography>
            <Grid container spacing={1} sx={{ mb: 3 }}>
                {genres.map(genre => (
                    <FormControlLabel
                        key={genre}
                        control={
                            <Checkbox
                                checked={selectedGenres.includes(genre)}
                                onChange={() => onGenreToggle(genre)}
                                size="small"
                            />
                        }
                        label={genre}
                    />
                ))}
            </Grid>

            {/* Кнопка сброса */}
            <Button variant="outlined" onClick={onReset} fullWidth>
                Reset filters
            </Button>
        </Paper>
    );
};