import { FaVideo } from "react-icons/fa"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"
import { useAppSelector } from "app/hooks"
import Divider from "components/UI/Divider"
import UserVideoBlock from "components/User/VideoBlock"
import { useEffect } from "react"
import { loadUserInfo } from "features/user/userSlice"
import { useParams } from "react-router-dom"
import Info from "./Info"
import StatsInfo from "./StatsInfo"
import ErrorText from "components/UI/ErrorText"

const UserPage = () => {
	const dispatch = useDispatch()
	const {
		data: infoData,
		isLoading: infoLoading,
		error,
	} = useAppSelector(s => s.user.info)
	const { id } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
		if (id && id !== infoData?.user?.uniqueId) {
			dispatch(loadUserInfo(id))
		}
	}, [id, dispatch])
	if (error) return <ErrorText>{error}</ErrorText>
	return (
		<>
			<Info loading={infoLoading} data={infoData.user} />
			<StatsInfo loading={infoLoading} data={infoData.stats} />
			<Divider height="4px">
				<S.LineContent>
					<FaVideo size={25} />
					Videos
				</S.LineContent>
			</Divider>
			<UserVideoBlock />
		</>
	)
}

const S = {
	LineContent: styled.p`
		display: flex;
		align-items: center;
		padding-bottom: 3px;
		margin: 0 1rem;
		svg {
			margin-right: 0.5rem;
			margin-bottom: -3px;
		}
	`,
}

export default UserPage
