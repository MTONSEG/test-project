export const prependPlus = (phoneNumber: string) => {
	const cleaned = phoneNumber.replace(/\D/g, '');

	console.log(cleaned);
	
}