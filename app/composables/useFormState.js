import { reactive, ref } from 'vue'

export const useFormState = () => {
	const form = reactive({
		name: '',
		area: '',
		service: '',
		phone: '',
		agree: false,
	})

	const services = [
		'Топпинг',
		'Полимерные полы',
		'Мозаичные полы',
		'Эпоксидные покрытия',
		'Шлифовка',
		'Ремонт/обеспыливание',
	]

	const isServiceOpen = ref(false)

	const toggleService = () => {
		isServiceOpen.value = !isServiceOpen.value
	}

	const selectService = (value) => {
		form.service = value
		isServiceOpen.value = false
	}

	const resetForm = () => {
		form.name = ''
		form.area = ''
		form.service = ''
		form.phone = ''
		form.agree = false
	}

	return {
		form,
		services,
		isServiceOpen,
		toggleService,
		selectService,
		resetForm,
	}
}

