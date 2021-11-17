import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { Container } from "styles/CommonStyles"
import { FaBolt } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { authUser } from "features/user/userSlice"
import { useAppSelector } from "app/hooks"
import ErrorText from "components/UI/ErrorText"

const Nav = () => {
	const dispatch = useDispatch()
	const { data: userAuth, isLoading, error } = useAppSelector(s => s.user.auth)
	useEffect(() => {
		dispatch(authUser())
	}, [dispatch])
	return (
		<>
			<S.Menu>
				<Container>
					<S.InnerMenu>
						<S.Logo to="/">
							<FaBolt />
							TikTuk
						</S.Logo>
						{isLoading || error ? (
							<MdAccountCircle size={40} />
						) : (
							<Link to={`/account/${userAuth.uniqueId}`}>
								<div className="icon">
									<img src={userAuth.avatarThumb} alt={userAuth.nickname} />
								</div>
							</Link>
						)}
						{error && <ErrorText>{error}</ErrorText>}
					</S.InnerMenu>
				</Container>
			</S.Menu>
		</>
	)
}

const S = {
	Menu: styled.nav`
		border-bottom: 1px solid grey;
		background-color: white;
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 5;
	`,
	Logo: styled(Link)`
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		text-shadow: 2px 0 2px rgb(214, 54, 81);
	`,
	InnerMenu: styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 50px;

		.icon {
			width: 45px;
			height: 45px;
			border-radius: 50%;
			overflow: hidden;
			margin: 0.4rem;
		}
	`,
}
export default Nav
