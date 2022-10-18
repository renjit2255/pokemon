import { useMemo } from 'react'

const usePagination = ({
  totalCount,
  pageSize
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    return [0, totalPageCount]
  }, [totalCount, pageSize])

  return paginationRange
}

export default usePagination
