import s from "@/features/categoryMovies/ui/categoryMovies.module.css";
import { Card } from "@/common/components/card/Card.tsx";
import { Pagination } from "@/common/components/pagination/Pagination.tsx";
import type { FilteredResponse } from "@/features/filteredMovies/lib/types.ts";

type SortedMoviesProps = {
    data: FilteredResponse | undefined;
    currentPage: number;
    setCurrentPage: (page: number) => void;
};

export const SortedMovies = ({ data, currentPage, setCurrentPage }: SortedMoviesProps) => {
    return (
        <>
            <div className={s.movies_wrapper}>
                {data?.results?.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
};