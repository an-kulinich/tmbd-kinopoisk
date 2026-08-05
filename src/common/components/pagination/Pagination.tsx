import { useEffect } from "react"
import { Pagination as MuiPagination } from "@mui/material"
import { TMDB_MAX_PAGE } from "@/common/constants"
import s from "./pagination.module.css"

type Props = {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
    disabled?: boolean
}

export const Pagination = ({ page, totalPages, onPageChange, disabled = false }: Props) => {
    const pageCount = Math.min(Math.max(totalPages, 0), TMDB_MAX_PAGE)
    const visiblePage = Math.min(page, Math.max(pageCount, 1))

    useEffect(() => {
        if (pageCount > 0 && page > pageCount) {
            onPageChange(pageCount)
        }
    }, [onPageChange, page, pageCount])

    if (pageCount <= 1) return null

    return (
        <MuiPagination
            className={s.pagination_container}
            aria-label="Пагинация"
            page={visiblePage}
            count={pageCount}
            onChange={(_, nextPage) => onPageChange(nextPage)}
            disabled={disabled}
            boundaryCount={1}
            siblingCount={1}
            showFirstButton
            showLastButton
            color="primary"
        />
    )
}
