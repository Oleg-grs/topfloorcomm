import { ref, onUnmounted } from 'vue'

export const useScrollLock = () => {
	const isLocked = ref(false)
	const scrollbarWidth = ref(0)

	const getScrollbarWidth = () =>
		typeof window === 'undefined' ? 0 : window.innerWidth - document.documentElement.clientWidth

	const lockScroll = () => {
		if (isLocked.value || typeof document === 'undefined') return
		const body = document.body
		scrollbarWidth.value = getScrollbarWidth()

		const scrollY = window.scrollY
		body.style.position = 'fixed'
		body.style.top = `-${scrollY}px`
		body.style.left = '0'
		body.style.right = '0'
		body.style.width = '100%'
		body.style.overflow = 'hidden'
		body.style.paddingRight = `${scrollbarWidth.value}px`

		isLocked.value = true
	}

	const unlockScroll = () => {
		if (!isLocked.value || typeof document === 'undefined') return
		const body = document.body
		const html = document.documentElement

		// Читаем сохранённую позицию из top
		const scrollY = Math.abs(parseInt(body.style.top || '0'))

		// Убираем fixed
		body.style.position = ''
		body.style.top = ''
		body.style.left = ''
		body.style.right = ''
		body.style.width = ''
		body.style.overflow = ''
		body.style.paddingRight = ''

		const prevScrollBehavior = html.style.scrollBehavior
		html.style.scrollBehavior = 'auto'
		body.style.scrollBehavior = 'auto'

		window.scrollTo(0, scrollY)

		html.style.scrollBehavior = prevScrollBehavior
		body.style.scrollBehavior = ''

		isLocked.value = false
		scrollbarWidth.value = 0
	}

	onUnmounted(() => isLocked.value && unlockScroll())

	return { lockScroll, unlockScroll, isLocked, scrollbarWidth }
}
