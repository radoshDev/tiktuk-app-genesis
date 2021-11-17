import { FC, useState } from "react"
import styled from "styled-components/macro"
import { Video } from "types/usersTypes"
import { kFormatter } from "utils/kFormatter"
import VideoElement from "components/UI/Video"

type Props = {
	playCount: number
	video: Video
	isMock?: boolean
}

const VideoItem: FC<Props> = ({ playCount, video, isMock }) => {
	const [onHover, setOnHover] = useState(false)
	return (
		<S.Card
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
		>
			<S.Title>{kFormatter(playCount)} View</S.Title>
			<S.VideoWrapper imgUrl={video.cover}>
				{isMock && onHover && <VideoElement />}
			</S.VideoWrapper>
		</S.Card>
	)
}

const S = {
	Card: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
		cursor: pointer;
	`,
	Title: styled.p`
		position: absolute;
		text-align: center;
		padding: 0.5rem 0 1rem;
		color: white;
		background: linear-gradient(
			180deg,
			rgba(85, 85, 85, 1) 0%,
			rgba(253, 255, 255, 0) 100%
		);
		top: 0;
		left: 0;
		width: 100%;
	`,
	VideoWrapper: styled.div<{ imgUrl: string }>`
		background-image: url(${p => p.imgUrl || ""});
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
	`,
}
export default VideoItem
