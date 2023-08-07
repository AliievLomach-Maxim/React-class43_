const BASE_URL = 'https://fakestoreapi.com/products'

export const getSingleProduct = async (id) => {
	const data = await fetch(`${BASE_URL}/${id}`)
	return await data.json()
}

export const getAllCategories = async () => {
	const data = await fetch(`${BASE_URL}/categories`)
	return await data.json()
}

export const handleCategoriesAndProducts = async (category) => {
	const url = category ? `${BASE_URL}/category/${category}` : BASE_URL
	const data = await fetch(url)
	return await data.json()
}
