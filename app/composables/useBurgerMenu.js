import { watch } from "vue";
import {useScrollLock} from "~/composables/useScrollLock.js";

export const useBurgerMenu = () => {
	const key = 'burger-menu-open'
	const isOpen = useState(key, () => false)
	const { lockScroll, unlockScroll, isLocked } = useScrollLock()

	const open   = () => (isOpen.value = true)
	const close  = () => (isOpen.value = false)
	const toggle = () => (isOpen.value = !isOpen.value)

	watch(() => isOpen.value, (val) => {
		if (val) lockScroll()
		else unlockScroll()
	})

	return {
		isOpen: readonly(isOpen),
		open,
		close,
		toggle
	}
}