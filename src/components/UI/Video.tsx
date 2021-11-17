import { useState, useRef } from "react"
import styled from "styled-components/macro"
import { FiPause, FiPlay } from "react-icons/fi"
import { RiVolumeDownFill, RiVolumeMuteFill } from "react-icons/ri"

type Props = {
	videoUrl?: string
}

const Video = ({ videoUrl }: Props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	const videoRef = useRef<HTMLVideoElement | null>(null)
	const handlePlay = () => {
		if (!videoRef.current) return
		if (isPlaying) {
			videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			videoRef.current?.play()
			setIsPlaying(true)
		}
	}
	const handleLoaded = async (e: any) => {
		await e.target.play()
		setIsPlaying(true)
		setIsLoading(false)
	}
	const handleMute = () => {
		if (!videoRef.current) return

		if (videoRef.current.muted) {
			videoRef.current.muted = false
			setIsMuted(false)
		} else {
			videoRef.current.muted = true
			setIsMuted(true)
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
	return (
		<S.VideoContainer isLoading={isLoading}>
			<video
				ref={videoRef}
				src={videoUrl}
				onLoadedData={handleLoaded}
				muted
				loop
			/>
			<div className="controls">
				{isPlaying ? <FiPause {...iconPlay} /> : <FiPlay {...iconPlay} />}
				{isMuted ? (
					<RiVolumeMuteFill {...iconMute} />
				) : (
					<RiVolumeDownFill {...iconMute} />
				)}
			</div>
		</S.VideoContainer>
	)
}

const S = {
	VideoContainer: styled.div<{ isLoading: boolean }>`
		position: relative;
		height: 100%;
		opacity: ${p => (p.isLoading ? "0" : "1")};
		display: flex;
		video {
			object-fit: cover;
			object-position: center;
			width: 100%;
			max-height: 600px;
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

export default Video
