import Rectangle from "components/UI/Rectangle"
import { FC } from "react"
import styled from "styled-components/macro"
import { Stats } from "types/usersTypes"
import { kFormatter } from "utils/kFormatter"

type Props = {
	loading: boolean
	data: Stats
}

const StatsInfo: FC<Props> = ({ loading, data }) => {
	return (
		<S.Stat>
			{loading ? (
				<Rectangle width={325} height={30} />
			) : (
				<>
					<div>
						<span className="bold">{kFormatter(data?.followingCount)}</span>{" "}
						Following
					</div>
					<div>
						<span className="bold">{kFormatter(data?.followerCount)}</span>{" "}
						Followers
					</div>
					<div>
						<span className="bold">{kFormatter(data?.heartCount)}</span> Likes
					</div>
				</>
			)}
		</S.Stat>
	)
}

const S = {
	Stat: styled.div`
		display: grid;
		grid-template-columns: repeat(3, max-content);
		column-gap: 1rem;
		margin: 1rem 0 2rem;
		.bold {
			font-weight: bold;
		}
	`,
}
export default StatsInfo
