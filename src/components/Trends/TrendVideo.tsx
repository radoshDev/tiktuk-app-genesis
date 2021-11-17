import { useState, useRef, useEffect } from "react"
import styled from "styled-components/macro"
import { FiPause, FiPlay } from "react-icons/fi"
import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { useAppSelector } from "app/hooks"
import { useDispatch } from "react-redux"
import { setMutedAll } from "features/trends/trendsSlice"

type Props = {
	videoUrl?: string
}

const TrendVideo = ({ videoUrl }: Props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.5,
	})
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const isMuted = useAppSelector(s => s.trends.isMuted)
	const dispatch = useDispatch()

	const handlePlay = async () => {
		if (!videoRef.current) return
		if (isPlaying) {
			await videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			await videoRef.current?.play()
			setIsPlaying(true)
		}
	}
	const handleMute = () => {
		dispatch(setMutedAll())
	}
	const handleAutoPlay = async () => {
		if (inView) {
			await videoRef.current?.play()
			setIsPlaying(true)
		} else {
			await videoRef.current?.pause()
			setIsPlaying(false)
		}
	}
	const iconPlay = {
		size: 28,
		color: "white",
		onClick: handlePlay,
	}
	const iconMute = {
		size: 28,
		color: "white",
		onClick: handleMute,
	}
	useEffect(() => {
		if (!isLoading) {
			handleAutoPlay()
		}
	}, [inView, isLoading])
	return (
		<S.VideoBlock isLoading={isLoading}>
			<video
				ref={videoRef}
				src={videoUrl}
				onLoadedData={() => setIsLoading(false)}
				muted={isMuted}
				loop
			/>
			<div className="controls">
				{isPlaying ? <FiPause {...iconPlay} /> : <FiPlay {...iconPlay} />}
				{isMuted ? (
					<RiVolumeMuteFill {...iconMute} />
				) : (
					<RiVolumeUpFill {...iconMute} />
				)}
			</div>
			<div className="overlap" ref={ref} />
		</S.VideoBlock>
	)
}

const S = {
	VideoBlock: styled.div<{ isLoading: boolean }>`
		position: relative;
		height: 600px;
		background-color: lightgray;
		.overlap {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
		}
		video {
			object-fit: cover;
			object-position: center;
			width: 100%;
			max-height: 600px;
			opacity: ${p => (p.isLoading ? "0" : "1")};
			transition: opacity 0.5s ease-in-out;
		}
		.controls {
			position: absolute;
			padding: 0.5rem;
			left: 0;
			bottom: 0;
			z-index: 4;
			width: 100%;
			opacity: 0.8;
			display: flex;
			justify-content: space-between;
		}
	`,
}

export default TrendVideo
