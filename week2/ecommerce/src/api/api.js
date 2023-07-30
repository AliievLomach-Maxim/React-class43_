export const getAllProducts = async () => {
	const data = await fetch('https://fakestoreapi.com/products')
	return await data.json()
}

export const getSingleProduct = async (id) => {
	const data = await fetch(`https://fakestoreapi.com/products/${id}`)
	return await data.json()
}

export const getAllCategories = async () => {
	const data = await fetch('https://fakestoreapi.com/products/categories')
	return await data.json()
}

export const getProductsByCategory = async (category) => {
	const data = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	)
	return await data.json()
}
