import { useRef, useState, useEffect, MutableRefObject } from "react"

export const useElementOnScreen = <T extends Element>(
	options: IntersectionObserverInit
): [MutableRefObject<null | T>, boolean] => {
	const containerRef = useRef<T | null>(null)
	const [isVisible, setIsVisible] = useState(false)

	const callbackFunc = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries
		setIsVisible(entry.isIntersecting)
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunc, options)
		if (containerRef?.current) observer.observe(containerRef.current)

		return () => {
			if (containerRef?.current) observer.unobserve(containerRef.current)
		}
	}, [containerRef, options])
	return [containerRef, isVisible]
}
