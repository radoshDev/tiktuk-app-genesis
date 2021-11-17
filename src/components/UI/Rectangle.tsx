import { FC } from "react"

type Props = {
	width: number
	height: number
	fill?: string
}

const Rectangle: FC<Props> = ({ width, height, fill }) => {
	return (
		<svg width={width} height={height}>
			<rect width={width} height={height} fill={fill || "lightgray"} />
		</svg>
	)
}

export default Rectangle
