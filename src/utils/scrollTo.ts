export const scrollTo = (id: string) => {
	document
		.getElementById(id)
		?.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
