import { FC } from "react"
import styled, { css } from "styled-components"
type Props = {
	height?: string
	color?: string
}
const Divider: FC<Props> = ({ height, children }) => {
	return (
		<Hr height={height} hasChild={!!children}>
			{children}
		</Hr>
	)
}

const lines = css<Props>`
	&::before,
	&::after {
		content: "";
		width: 50%;
		height: ${p => p.height || "1px"};
		background-color: ${p => p.color || "rgba(34, 36, 38, 0.15)"};
		line-height: 1;
		margin: 1rem 0;
	}
`
const oneLine = css<Props>`
	background-color: ${p => p.color || "rgba(34, 36, 38, 0.15)"};
	margin: 1rem 0;
	line-height: 1;
	height: ${p => p.height || "1px"};
`
const flexProp = css`
	display: flex;
	align-items: center;
`

const Hr = styled.div<Props & { hasChild: boolean }>`
	${p => (p.hasChild ? flexProp : "display: block")};
	${p => (p.hasChild ? lines : oneLine)}
`

export default Divider
