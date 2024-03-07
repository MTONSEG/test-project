export const formatPhoneNumber = (number: string): string => {
	// Remove all non-digit characters
	const cleaned = number.replace(/\D/g, '')

	// RegExp format
	const match = cleaned.match(/^(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})$/)

	if (match) {
		return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`
	}

	return number // Return the original string if no match is found
}
