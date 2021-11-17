import styled from "styled-components/macro"

interface ContainerProps {
	readonly flex?: boolean
}

export const Container = styled.div<ContainerProps>`
	max-width: 1050px;
	margin: 0 auto;
	padding: 0 1rem;
	display: ${p => (p.flex ? "flex" : "block")};
`
