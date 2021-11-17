import { FC } from "react"
import styled from "styled-components/macro"

const ErrorText: FC = ({ children }) => {
	return <Error>{children}</Error>
}

const Error = styled.p`
	color: rebeccapurple;
	font-size: 1.5rem;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: max-content;
`

export default ErrorText
