import { useState } from 'react'
import { getAllProducts, getProductsByCategory } from '../../api/api'
import { useEffect } from 'react'
import Header from '../../Header/Header'
import Main from '../../Main/Main'

const Products = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')

	const fetchAllProducts = async () => {
		try {
			setIsLoading(true)
			const productsData = await getAllProducts()
			setProducts(productsData)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchAllProducts()
	}, [])

	useEffect(() => {
		const fetchFilterProducts = async () => {
			try {
				setIsLoading(true)
				const productsData = await getProductsByCategory(
					selectedCategory
				)
				setProducts(productsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		selectedCategory ? fetchFilterProducts() : fetchAllProducts()
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
