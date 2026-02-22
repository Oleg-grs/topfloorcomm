// composables/usePhoneMask.js
export const usePhoneMask = () => {
	const formatPhone = (value) => {
		const digits = value.replace(/\D/g, '')

		let number = digits
		if (number.startsWith('8')) number = '7' + number.slice(1)
		if (!number.startsWith('7')) number = '7' + number
		number = number.slice(0, 11)

		let res = '+7'
		if (number.length > 1) res += ' (' + number.slice(1, 4)
		if (number.length >= 4) res += ') ' + number.slice(4, 7)
		if (number.length >= 7) res += '-' + number.slice(7, 9)
		if (number.length >= 9) res += '-' + number.slice(9, 11)

		return res
	}

	const isPhoneValid = (phone) => {
		return phone && phone.length === 18
	}

	return {
		formatPhone,
		isPhoneValid,
	}
}
