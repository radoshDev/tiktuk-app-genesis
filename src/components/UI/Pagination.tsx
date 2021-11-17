import { FC, useEffect, useMemo, useState } from "react"
import styled from "styled-components/macro"

type Props = {
	activePage: number
	totalPages: number
	itemsPerPage?: number
	setActivePage: (page: number) => void
}

const Pagination: FC<Props> = ({
	totalPages,
	activePage,
	setActivePage,
	itemsPerPage = 5,
}) => {
	const [currentItems, setCurrentItems] = useState<number[]>([])
	const [itemOffset, setItemOffset] = useState(0)
	const items = useMemo(
		() =>
			Array(totalPages)
				.fill(1)
				.map((el: number, i) => el + i),
		[totalPages]
	)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(items.slice(itemOffset, endOffset))
	}, [itemOffset, itemsPerPage, items])

	// Invoke when user click to request another page.
	const handlePageClick = (currentPage: number) => {
		if (
			currentPage === currentItems[currentItems?.length - 1] &&
			currentPage >= itemsPerPage
		) {
			setItemOffset(p =>
				p < totalPages - itemsPerPage ? p + 1 : totalPages - itemsPerPage
			)
		}
		if (currentPage === currentItems[0]) {
			setItemOffset(p => (p > 0 ? p - 1 : 0))
		}
		setActivePage(currentPage)
	}
	const handlePrev = () => {
		if (activePage > 1) handlePageClick(activePage - 1)
	}
	const handleNext = () => {
		if (activePage < totalPages) {
			handlePageClick(activePage + 1)
		}
	}
	return (
		<S.Pagination>
			<S.Btn className={activePage === 1 ? "active" : ""} onClick={handlePrev}>
				Prev
			</S.Btn>
			{currentItems?.map(page => (
				<S.Btn
					className={activePage === page ? "active" : ""}
					key={page}
					onClick={() => handlePageClick(page)}>
					{page}
				</S.Btn>
			))}
			<S.Btn
				className={activePage === totalPages ? "active" : ""}
				onClick={handleNext}>
				Next
			</S.Btn>
		</S.Pagination>
	)
}

const S = {
	Pagination: styled.div`
		display: inline-flex;
		border: 1px solid rgba(34, 36, 38, 0.1);
		border-right: none;
	`,
	Btn: styled.button`
		border: none;
		min-width: 3em;
		line-height: 1;
		flex: 0 0 auto;
		user-select: none;
		background: white;
		padding: 0.92857143em 1.14285714em;
		color: rgba(0, 0, 0, 0.87);
		font-weight: 400;
		transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease,
			-webkit-box-shadow 0.1s ease;
		border-right: 1px solid rgba(34, 36, 38, 0.1);
		cursor: pointer;
		&:hover {
			background: rgba(0, 0, 0, 0.03);
		}
		&.active {
			background: rgba(0, 0, 0, 0.05);
		}
	`,
}

export default Pagination
