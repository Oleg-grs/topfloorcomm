import { ref, onUnmounted } from 'vue'

export const useScrollLock = () => {
	const isLocked = useState('scroll-lock', () => false)
	const scrollbarWidth = ref(0)
	let originalBodyStyles = useState('scroll-lock-styles', () => null)

	const getScrollbarWidth = () => {
		if (typeof window === 'undefined') return 0
		return window.innerWidth - document.documentElement.clientWidth
	}

	const lockScroll = () => {
		if (isLocked.value || typeof document === 'undefined') return

		const body = document.body
		scrollbarWidth.value = getScrollbarWidth()

		// Сохраняем оригинальные стили
		originalBodyStyles = {
			paddingRight: body.style.paddingRight,
			overflow: body.style.overflow
		}

		// Блокируем скролл
		body.style.overflow = 'hidden'
		body.style.paddingRight = `${scrollbarWidth.value}px`

		isLocked.value = true
	}

	const unlockScroll = () => {
		if (!isLocked.value || !originalBodyStyles || typeof document === 'undefined') return
		const body = document.body

		// Восстанавливаем стили
		body.style.overflow = originalBodyStyles.overflow
		body.style.paddingRight = originalBodyStyles.paddingRight

		originalBodyStyles = null
		isLocked.value = false
		scrollbarWidth.value = 0
	}

	// Автоматическая очистка
	onUnmounted(() => {
		if (isLocked.value) {
			unlockScroll()
		}
	})

	return {
		lockScroll,
		unlockScroll,
		isLocked,
		scrollbarWidth
	}
}
