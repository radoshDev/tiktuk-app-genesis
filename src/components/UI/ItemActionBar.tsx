import { FcLike } from "react-icons/fc"
import { FaCommentDots } from "react-icons/fa"
import styled from "styled-components/macro"
import { kFormatter } from "utils/kFormatter"

type Props = {
	commentCount: number
	likeCount: number
}

const ItemActionBar = ({ commentCount, likeCount }: Props) => {
	return (
		<S.ActionBar>
			<div className="item">
				<div className="icon">
					<FcLike size={30} />
				</div>
				<span className="amount">{kFormatter(likeCount)}</span>
			</div>
			<div className="item">
				<div className="icon">
					<FaCommentDots size={30} />
				</div>
				<span className="amount">{kFormatter(commentCount)}</span>
			</div>
		</S.ActionBar>
	)
}

const S = {
	ActionBar: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0.5rem 0 0 0.5rem;
		position: absolute;
		bottom: 0;
		right: -1rem;
		transform: translateX(100%);
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 0.8rem;
		}
	`,
}

export default ItemActionBar
