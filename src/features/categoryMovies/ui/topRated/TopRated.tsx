import {useGetTopRatedMoviesQuery} from "@/features/main/api/mainApi.ts"
import {Card} from "@/common/components/card/Card.tsx"
import s from "@/features/categoryMovies/ui/categoryMovies.module.css"
import {Pagination} from "@/common/components/pagination/Pagination.tsx"
import {usePageParam} from "@/common/hooks"

export const TopRated = () => {

    const [currentPage, setCurrentPage] = usePageParam()
    const { data, isFetching } = useGetTopRatedMoviesQuery(currentPage)

    return (
        <div className={s.common_container}>
            <div className={s.content_wrapper}>
                <h1 className={s.title}>Top Rated movies</h1>
                <div className={s.movies_wrapper}>
                    {data?.results?.map(movie => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
                <Pagination
                    page={currentPage}
                    totalPages={data?.total_pages ?? 0}
                    onPageChange={setCurrentPage}
                    disabled={isFetching}
                />
            </div>
        </div>
    );
};
