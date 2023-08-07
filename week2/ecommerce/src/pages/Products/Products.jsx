import { useState } from 'react'
import { handleCategoriesAndProducts } from '../../api/api'
import { useEffect } from 'react'
import Header from '../../Header/Header'
import Main from '../../Main/Main'

const Products = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')

	useEffect(() => {
		const fetchProducts = async (category = null) => {
			try {
				setIsLoading(true)
				setError('')
				const productsData = await handleCategoriesAndProducts(category)
				setProducts(productsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		selectedCategory ? fetchProducts(selectedCategory) : fetchProducts()
	}, [selectedCategory])

	return (
		<div className='App'>
			<Header
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{products && <Main products={products} />}
		</div>
	)
}

export default Products
