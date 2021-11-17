import Rectangle from "components/UI/Rectangle"
import { FC } from "react"
import { MdVerified } from "react-icons/md"
import styled from "styled-components/macro"
import { User } from "types/usersTypes"

type Props = {
	loading: boolean
	data: User
}

const Info: FC<Props> = ({ loading, data }) => {
	return (
		<S.Info>
			<div className="icon">
				{loading ? (
					<Rectangle width={150} height={150} />
				) : (
					<img src={data?.avatarMedium} alt={data?.nickname} />
				)}
			</div>
			<div className="about-user">
				{loading ? (
					<Rectangle width={150} height={50} />
				) : (
					<>
						<h1>
							{data?.uniqueId}
							{data?.verified ? <MdVerified color="lightblue" size={28} /> : ""}
						</h1>
						<h4>{data?.nickname}</h4>
						<p className="biography">{data?.signature}</p>
					</>
				)}
			</div>
		</S.Info>
	)
}

const S = {
	Info: styled.div`
		display: grid;
		grid-template-columns: minmax(100px, 150px) 1fr;
		column-gap: 1.5rem;
		margin-top: 2rem;
		.icon {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			overflow: hidden;
			background-color: lightgray;
			img {
				object-fit: cover;
				object-position: top;
			}
		}
		.about-user {
			h1 {
				svg {
					vertical-align: middle;
					margin-left: 0.4rem;
				}
			}
			.biography {
				margin: 1rem 0;
			}
		}
	`,
}

export default Info
