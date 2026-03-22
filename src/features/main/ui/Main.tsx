import { Box, Container } from "@mui/material";
import { SpinnerMovies } from "./spinnerMovies/SpinnerMovies.tsx";
import { Welcome } from "./welcome/Welcome.tsx";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/main/api/mainApi.ts";

export const Main = () => {
    const { data: PopularMovies } = useGetPopularMoviesQuery(1);
    const { data: TopRatedMovies } = useGetTopRatedMoviesQuery(1);
    const { data: UpcomingMovies } = useGetUpcomingMoviesQuery(1);
    const { data: NowPlayingMovies } = useGetNowPlayingMoviesQuery(1);

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1200px",
                    px: { xs: 2, sm: 3 }, // адаптивные отступы
                }}
            >
                <Welcome />
                <SpinnerMovies
                    data={PopularMovies}
                    category={"popular"}
                    title={"Popular Movies"}
                />
                <SpinnerMovies
                    data={TopRatedMovies}
                    category={"top-rated"}
                    title={"Top Rated Movies"}
                />
                <SpinnerMovies
                    data={UpcomingMovies}
                    category={"upcoming"}
                    title={"Upcoming Movies"}
                />
                <SpinnerMovies
                    data={NowPlayingMovies}
                    category={"now-playing"}
                    title={"Now Playing Movies"}
                />
            </Container>
        </Box>
    );
};