export const useModal = () => {
	const modalType = useState('modal:type', () => null)
	const modalPayload = useState('modal:payload', () => null)

	const openModal = (type, payload = null) => {
		modalType.value = type
		modalPayload.value = payload
	}

	const closeModal = () => {
		modalType.value = null
		modalPayload.value = null
	}

	return {
		modalType,
		modalPayload,
		openModal,
		closeModal,
	}
}
