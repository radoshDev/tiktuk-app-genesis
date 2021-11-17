import { FC, useEffect } from "react"
import styled from "styled-components/macro"
import VideoItem from "components/User/VideoItem"
import { useAppSelector } from "app/hooks"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import { loadUserFeed } from "features/user/userSlice"
import Rectangle from "components/UI/Rectangle"
import ErrorText from "components/UI/ErrorText"

const VideoPreloader = () => (
	<>
		{Array(9)
			.fill(1)
			.map((el, i) => (
				<S.VideoWrapper key={el + i}>
					<Rectangle width={300} height={300} />
				</S.VideoWrapper>
			))}
	</>
)

const VideoBlock: FC = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useAppSelector(s => s.user.feed)
	const { id } = useParams()

	useEffect(() => {
		if (data.length === 0 && id) {
			dispatch(loadUserFeed(id))
		}
	}, [id])
	return (
		<S.VideoGrid>
			{isLoading ? (
				<VideoPreloader />
			) : (
				data?.map?.((item, i) => (
					<VideoItem
						isMock={i === 0}
						playCount={item.stats.playCount}
						video={item.video}
						key={item.id}
					/>
				))
			)}
			{error && <ErrorText>{error}</ErrorText>}
		</S.VideoGrid>
	)
}

const S = {
	VideoGrid: styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
		grid-template-rows: 350px;
		grid-auto-rows: 350px;
		gap: 0.5rem;

		margin-top: 1rem;
		position: relative;
	`,
	VideoWrapper: styled.div`
		overflow: hidden;
		cursor: pointer;
	`,
}
export default VideoBlock
