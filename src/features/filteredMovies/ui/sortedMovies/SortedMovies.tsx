import s from "@/features/categoryMovies/ui/categoryMovies.module.css"
import { Card } from "@/common/components/card/Card.tsx"
import { Pagination } from "@/common/components/pagination/Pagination.tsx"
import type { FilteredResponse } from "@/features/filteredMovies/lib/types.ts"

type Props = {
    data: FilteredResponse | undefined
    currentPage: number
    setCurrentPage: (page: number) => void
    isFetching: boolean
};

export const SortedMovies = ({ data, currentPage, setCurrentPage, isFetching }: Props) => {
    return (
        <>
            <div className={s.movies_wrapper}>
                {data?.results?.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination
                page={currentPage}
                totalPages={data?.total_pages ?? 0}
                onPageChange={setCurrentPage}
                disabled={isFetching}
            />
        </>
    );
};
