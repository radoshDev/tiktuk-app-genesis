export const kFormatter = (count: number): string | number => {
	if (count < 1000) {
		return count
	}
	if (count < 1e6) {
		return (count / 1000).toFixed(1) + "K"
	}
	if (count < 1e9) {
		return (count / 1e6).toFixed(1) + "M"
	}
	return 0
}
