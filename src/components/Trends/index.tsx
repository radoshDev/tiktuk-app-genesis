import { useEffect, useState } from "react"
import TrendItem from "./TrendItem"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { loadTrends } from "features/trends/trendsSlice"
import { useAppSelector } from "app/hooks"
import Pagination from "components/UI/Pagination"
import TrendPreloader from "components/Trends/TrendPreloader"

const Trends = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useAppSelector(s => s.trends)
	const [currentPage, setCurrentPage] = useState(1)
	useEffect(() => {
		if (data.length === 0) {
			dispatch(loadTrends())
		}
		window.scrollTo(0, 0)
	}, [dispatch, currentPage])
	const perPage = 3
	const totalPages = Math.ceil(data.length / perPage)
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return (
		<S.Videos>
			{isLoading ? (
				<TrendPreloader />
			) : (
				<>
					{data.slice(start, end).map(item => (
						<TrendItem key={item.id} data={item} />
					))}
					<div className="pagination-wrapper">
						<Pagination
							activePage={currentPage}
							totalPages={totalPages}
							setActivePage={setCurrentPage}
						/>
					</div>
				</>
			)}
		</S.Videos>
	)
}
const S = {
	Videos: styled.div`
		margin-top: 2rem;

		.pagination-wrapper {
			width: 500px;
			margin: 0 auto;
			text-align: center;
		}
	`,
}
export default Trends
