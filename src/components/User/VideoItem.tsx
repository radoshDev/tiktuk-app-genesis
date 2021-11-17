import { FC, useState } from "react"
import styled from "styled-components/macro"
import { kFormatter } from "utils/kFormatter"
import VideoElement from "components/UI/Video"
import { TrendItem } from "types/trendsTypes"
import Modal from "components/UI/Modal"

type Props = {
	videoInfo: TrendItem
}
const VideoItem: FC<Props> = ({ videoInfo }) => {
	const [isVideoShow, setIsVideoShow] = useState(false)
	const [isModal, setIsModal] = useState(false)

	const handleOpenModal = () => {
		setIsModal(true)
	}
	return (
		<>
			<S.Card
				onClick={() => {
					handleOpenModal()
				}}
				onMouseEnter={() => setIsVideoShow(true)}
				onMouseLeave={() => setIsVideoShow(false)}>
				<S.Title>{kFormatter(videoInfo.playCount)} views</S.Title>
				<S.VideoWrapper imgUrl={videoInfo.covers.default}>
					{isVideoShow && <VideoElement videoUrl={videoInfo.videoUrl} />}
				</S.VideoWrapper>
			</S.Card>
			{isModal && (
				<Modal setIsModal={setIsModal}>
					<VideoElement videoUrl={videoInfo.videoUrl} />
				</Modal>
			)}
		</>
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
	VideoWrapper: styled.div<{ imgUrl?: string }>`
		background-image: url(${p => p.imgUrl || ""});
		background-color: lightgray;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
	`,
}
export default VideoItem
