import VerifiedIcon from "components/UI/VerifiedIcon"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { Hashtag } from "types/trendsTypes"

type Props = {
	image: string
	name: string
	nickname: string
	description: string
	verified: boolean
	hashtags: Hashtag[]
}

const Header = ({
	image,
	name,
	nickname,
	description,
	verified,
	hashtags,
}: Props) => {
	return (
		<S.Header>
			<div className="avatar">
				<Link to={`account/${name}`}>
					<img src={image} alt={name} />
				</Link>
			</div>
			<div className="news_user-info">
				<div className="username-block">
					<Link className="name" to={`account/${name}`}>
						{name}
					</Link>
					{verified && <VerifiedIcon size={20} />}
					<Link className="nickname" to={`account/${name}`}>
						{nickname}
					</Link>
				</div>
				<p className="description">{description.replace(/\b#\w+\s?/gi, "")}</p>
				<div className="hashtags">
					{hashtags.map((hash, i) => (
						<Link key={hash.name + i} to={`tag/${hash.name}`}>
							#{hash.name}
						</Link>
					))}
				</div>
			</div>
		</S.Header>
	)
}

const S = {
	Header: styled.div`
		display: grid;
		grid-template-columns: 55px 1fr;
		column-gap: 1rem;
		margin-bottom: 1rem;
		.avatar {
			width: 55px;
			height: 55px;
			border-radius: 50%;
			overflow: hidden;
			background-color: lightgray;
			img {
				object-fit: cover;
				object-position: center;
			}
		}
		.news_user-info {
			.username-block {
				.name {
					font-size: 1.125rem;
					font-weight: bold;
					margin-right: 0.25rem;
				}
				.nickname {
					font-size: 0.875rem;
				}
				svg {
					margin-right: 0.25rem;
					vertical-align: sub;
				}
			}
			.description {
				margin: 0.25rem 0;
			}
			.hashtags {
				a {
					color: #4183c4;
					margin-right: 0.25rem;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	`,
}

export default Header
