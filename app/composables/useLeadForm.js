import { ref } from 'vue'

export const useLeadForm = () => {
	const isSubmitting = ref(false)
	const error = ref('')

	const sendLead = async (payload) => {
		error.value = ''
		isSubmitting.value = true

		try {
			await $fetch('/api/lead-vk', {
				method: 'POST',
				body: payload
			})
			return true
		} catch (e) {
			console.error(e)
			error.value = 'Не удалось отправить заявку. Попробуйте ещё раз.'
			return false
		} finally {
			isSubmitting.value = false
		}
	}

	return {
		isSubmitting,
		error,
		sendLead,
	}
}
