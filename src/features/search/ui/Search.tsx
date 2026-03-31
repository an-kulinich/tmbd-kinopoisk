import { SearchElement } from "@/common/components/searchElement/SearchElement";
import s from "./search.module.css";
import { useState } from "react";
import { searchApi, useSearchMoviesQuery } from "@/features/search/api/seachApi";
import { Card } from "@/common/components/card/Card";
import { Pagination } from "@/common/components/pagination/Pagination";
import { useSearchParams } from "react-router";
import { useAppDispatch } from "@/common/hooks";

export const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState(1);
	const searchTerm = searchParams.get("query") ?? "";
	const dispatch = useAppDispatch()

	// Запрос выполняется только если searchTerm не пустой
	const { data, isFetching, isLoading, isUninitialized, isError } = useSearchMoviesQuery(
		{ searchQuery: searchTerm, page: currentPage },
		{ skip: !searchTerm.trim() }
	);

	const onSearchSubmit = (query: string) => {
		setCurrentPage(1); // сбрасываем страницу при новом поиске
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev);
			next.set("query", query);
			return next;
		});
	};

	const onSearchClear = () => {
		setCurrentPage(1);
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev);
			next.delete("query");
			return next;
		});
		dispatch(searchApi.util.invalidateTags(["Search"]));
	};

	const showSearchStatus = !!searchTerm.trim() && !isUninitialized && !isLoading && !isFetching;
	const hasResults = (data?.results?.length ?? 0) > 0;

	return (
		<div className={s.search_container}>
			<div className={s.content_wrapper}>
				<h2>Search results</h2>
				<SearchElement
					key={searchTerm}
					onSearchSubmit={onSearchSubmit}
					onClear={onSearchClear}
					query={searchTerm}
				/>
				{!searchTerm && <span>Enter a movie title to start searching.</span>}
				<div className={s.movies_wrapper}>
					{showSearchStatus && hasResults && (
						<h3>Results for "{searchTerm}"</h3>
					)}
					{showSearchStatus && !hasResults && !isError && (
						<div>
							<span>No matches found for "{searchTerm}".</span>
						</div>
					)}

					{data?.results?.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
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