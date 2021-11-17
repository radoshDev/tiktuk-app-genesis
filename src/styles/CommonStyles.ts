import styled from "styled-components/macro"

interface ContainerProps {
	readonly flex?: boolean
}

export const Container = styled.div<ContainerProps>`
	max-width: 1050px;
	margin: 0 auto;
	padding: 0 1rem;
	display: ${p => (p.flex ? "flex" : "block")};
	position: relative;
`
type ButtonI = {
	color?: string
	background?: string
}
export const Button = styled.button<ButtonI>`
	cursor: pointer;
	display: inline-block;
	min-height: 1em;
	outline: 0;
	border: none;
	vertical-align: baseline;
	background: #e0e1e2;
	color: rgba(0, 0, 0, 0.6);
	font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
	margin: 0 0.25 em 0 0;
	padding: 0.78571429em 1.5em 0.78571429em;
	text-shadow: none;
	font-weight: 700;
	line-height: 1em;
	font-style: normal;
	text-align: center;
	border-radius: 0.28571429rem;
	box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
	user-select: none;
	transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
		box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;

	&:hover {
		background-color: #cacbcd;
		box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
		color: rgba(0, 0, 0, 0.8);
	}
`
