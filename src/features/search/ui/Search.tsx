import { SearchElement } from "@/features/search/ui/searchElement/SearchElement"
import s from "./search.module.css"
import { useState } from "react"
import { useSearchMoviesQuery } from "@/features/search/api/seachApi"
import { Card } from "@/common/components/card/Card"
import { Pagination } from "@/common/components/pagination/Pagination"
import { useSearchParams } from "react-router"

export const Search = () => {

	const [searchParams, setSearchParams] = useSearchParams()
	const [currentPage, setCurrentPage] = useState(1)

	const searchTerm = searchParams.get("query") ?? ""

	// Запрос выполняется только если есть searchTerm
	const {data, isFetching, isLoading, isError} = useSearchMoviesQuery(
		{ searchQuery: searchTerm, page: currentPage },
		{ skip: !searchTerm.trim() }
	);

	const onSearchSubmit = (query: string) => {
		setCurrentPage(1);
		// Обновляем URL с новым поисковым запросом
		setSearchParams({ query });
	};

	const onSearchClear = () => {
		setCurrentPage(1);
		// Очищаем URL параметры
		setSearchParams({});
	};

	// Определяем, нужно ли показывать результаты
	const showResults = searchTerm.trim() && !isLoading && !isFetching
	const hasResults = data?.results && data.results.length > 0
	const isEmptyResults = showResults && !hasResults && !isError

	return (
		<div className={s.search_container}>
			<div className={s.content_wrapper}>
				<h2>Search results</h2>

				<SearchElement
					key={searchTerm || "empty"}
					onSearchSubmit={onSearchSubmit}
					onClear={onSearchClear}
					query={searchTerm}
				/>

				{/* Состояние: нет поискового запроса */}
				{!searchTerm && (
					<span>Enter a movie title to start searching.</span>
				)}

				{/* Результаты найдены */}
				{showResults && hasResults && (
					<div className={s.results_container}>
						<h3>Results for "{searchTerm}"</h3>
						<div className={s.movies_wrapper}>
							{data.results.map((movie) => (
								<Card key={movie.id} movie={movie} />
							))}
						</div>
						{data.total_pages > 1 && (
							<Pagination
								data={data}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						)}
					</div>
				)}

				{/* Результатов нет */}
				{isEmptyResults && (
					<div>
						<span>No matches found for "{searchTerm}".</span>
					</div>
				)}

				{/* Ошибка */}
				{isError && (
					<div>
						<span>Error occurred while searching for "{searchTerm}".</span>
					</div>
				)}

			</div>
		</div>
	);
};