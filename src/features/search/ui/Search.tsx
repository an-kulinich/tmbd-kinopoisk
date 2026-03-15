import { SearchElement } from "@/common/components/searchElement/SearchElement";
import s from "./search.module.css";
import { useState } from "react";
import { useSearchMoviesQuery } from "@/features/search/api/seachApi";
import { Card } from "@/common/components/card/Card";
import { Pagination } from "@/common/components/pagination/Pagination";

export const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Запрос выполняется только если searchTerm не пустой
    const { data } = useSearchMoviesQuery(
        { searchQuery: searchTerm, page: currentPage },
        { skip: !searchTerm.trim() }
    );

    const handleSearchSubmit = (query: string) => {
        setSearchTerm(query);
        setCurrentPage(1); // сбрасываем страницу при новом поиске
    };

    return (
        <div className={s.search_container}>
            <div className={s.content_wrapper}>
                <h2>Search results</h2>
                <SearchElement onSearchSubmit={handleSearchSubmit} />
                {!searchTerm && <span>Enter a movie title to start searching.</span>}
                <div className={s.movies_wrapper}>
                    {
                        data ?
                            data.results.map(
                            (movie) => (
                                <Card key={movie.id} movie={movie} />
                            )
                        ) :
                            <div>
                                <h3>Results for "{searchTerm}"</h3>
                                <span>No matches found for "{searchTerm}".</span>
                            </div>
                    }

                    {data?.results?.map(
                        (movie) => (
                            <Card key={movie.id} movie={movie} />
                        )
                    )}
                </div>
                {data && data.total_pages > 1 && (
                    <Pagination
                        data={data}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};