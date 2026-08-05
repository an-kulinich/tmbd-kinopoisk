import { useCallback, useEffect } from "react"
import { useSearchParams } from "react-router"
import { TMDB_MAX_PAGE } from "@/common/constants"

const normalizePage = (value: number) => {
    if (!Number.isInteger(value)) return 1

    return Math.min(Math.max(value, 1), TMDB_MAX_PAGE)
}

export const usePageParam = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const rawPage = searchParams.get("page")
    const page = normalizePage(Number(rawPage))

    const setPage = useCallback((nextPage: number) => {
        const normalizedPage = normalizePage(nextPage)

        setSearchParams(previousParams => {
            const nextParams = new URLSearchParams(previousParams)

            if (normalizedPage === 1) {
                nextParams.delete("page")
            } else {
                nextParams.set("page", String(normalizedPage))
            }

            return nextParams
        })
    }, [setSearchParams])

    useEffect(() => {
        if (rawPage === null || rawPage === String(page)) return

        setPage(page)
    }, [page, rawPage, setPage])

    return [page, setPage] as const
}
