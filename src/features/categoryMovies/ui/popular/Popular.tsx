import { useState } from "react"
import { useGetPopularMoviesQuery } from "@/features/main/api/mainApi.ts"
import s from "@/features/categoryMovies/ui/categoryMovies.module.css"
import { Card } from "@/common/components/card/Card.tsx"
import {Pagination} from "@/common/components/pagination/Pagination.tsx"

export const Popular = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetPopularMoviesQuery(currentPage);

    return (
        <div className={s.common_container}>
            <div className={s.content_wrapper}>
                <h1 className={s.title}>Popular movies</h1>
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