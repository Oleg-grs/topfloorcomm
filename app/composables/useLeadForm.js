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
			error.value = 'Мы уже работаем над решением проблемы. А пока Вы можете нам <br> <a href="tel:+79292787853">позвонить +7 (929) 278-78-53</a>'
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
