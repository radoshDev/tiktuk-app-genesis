import { useEffect, useState } from "react"
import TrendItem from "./TrendItem"
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"
import { loadTrends } from "features/trends/trendsSlice"
import { useAppSelector } from "app/hooks"
import Pagination from "components/UI/Pagination"
import TrendPreloader from "components/Trends/TrendPreloader"
import ErrorText from "components/UI/ErrorText"

const Trends = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useAppSelector(s => s.trends)
	const [currentPage, setCurrentPage] = useState(1)
	const itemPerPage = 5
	const totalPages = Math.ceil(data.length / itemPerPage)
	const start = (currentPage - 1) * itemPerPage
	const end = start + itemPerPage

	useEffect(() => {
		if (data.length === 0) {
			dispatch(loadTrends())
		}
		window.scrollTo(0, 0)
	}, [dispatch, currentPage, data.length])

	if (error)
		return (
			<S.Videos>
				<ErrorText>{error}</ErrorText>
			</S.Videos>
		)
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
		max-width: 600px;
		margin: 2rem auto;
		position: relative;

		.pagination-wrapper {
			width: 500px;
			margin: 0 auto;
			text-align: center;
		}
	`,
}
export default Trends
