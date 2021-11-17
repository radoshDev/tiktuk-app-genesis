import TrendVideo from "components/Trends/TrendVideo"
import ItemActionBar from "components/UI/ItemActionBar"
import styled from "styled-components/macro"

type Props = {
	videoUrl: string
	commentCount: number
	likeCount: number
}

const Content = ({ videoUrl, commentCount, likeCount }: Props) => {
	return (
		<S.Content>
			<S.Wrapper>
				<TrendVideo videoUrl={videoUrl} />
				<ItemActionBar commentCount={commentCount} likeCount={likeCount} />
			</S.Wrapper>
		</S.Content>
	)
}

const S = {
	Content: styled.div`
		display: flex;
	`,
	Wrapper: styled.div`
		display: flex;
		position: relative;
	`,
}
export default Content
