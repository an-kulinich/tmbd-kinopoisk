import {useState} from "react"
import {useGetTopRatedMoviesQuery} from "@/features/main/api/mainApi.ts"
import {Card} from "@/common/components/card/Card.tsx"
import s from "@/features/categoryMovies/ui/categoryMovies.module.css"
import {Pagination} from "@/common/components/pagination/Pagination.tsx"

export const TopRated = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetTopRatedMoviesQuery(currentPage);

    return (
        <div className={s.common_container}>
            <div className={s.content_wrapper}>
                <h1 className={s.title}>Top Rated movies</h1>
                <div className={s.movies_wrapper}>
                    {data?.results?.map(movie => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
                <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};