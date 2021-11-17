import { MdVerified } from "react-icons/md"

type Props = {
	size: number
}

const VerifiedIcon = ({ size }: Props) => {
	return <MdVerified color="lightblue" size={size} />
}

export default VerifiedIcon
