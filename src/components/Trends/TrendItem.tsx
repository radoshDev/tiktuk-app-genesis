import styled from "styled-components/macro"
import Divider from "components/UI/Divider"
import Header from "./Header"
import Content from "./Content"
import { TrendItem as TrendI } from "types/trendsTypes"

type Props = {
	data: TrendI
}

const TrendItem = ({ data }: Props) => {
	return (
		<S.Card>
			<Header
				image={data.authorMeta.avatar}
				name={data.authorMeta.name}
				nickname={data.authorMeta.nickName}
				description={data.text}
				verified={data.authorMeta.verified}
				hashtags={data.hashtags}
			/>
			<Content
				videoUrl={data.videoUrl}
				commentCount={data.commentCount}
				likeCount={data.diggCount}
			/>
			<Divider />
		</S.Card>
	)
}

const S = {
	Card: styled.div``,
}

export default TrendItem
