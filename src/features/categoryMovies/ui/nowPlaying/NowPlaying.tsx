import {useGetNowPlayingMoviesQuery} from "@/features/main/api/mainApi.ts"
import s from "@/features/categoryMovies/ui/categoryMovies.module.css"
import {Card} from "@/common/components/card/Card.tsx"
import {Pagination} from "@/common/components/pagination/Pagination.tsx"
import {usePageParam} from "@/common/hooks"

export const NowPlaying = () => {

    const [currentPage, setCurrentPage] = usePageParam()
    const { data, isFetching } = useGetNowPlayingMoviesQuery(currentPage)

    return (
        <div className={s.common_container}>
            <div className={s.content_wrapper}>
                <h1 className={s.title}>Now Playing movies</h1>
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
