import { useState } from 'react'
import { useEffect } from 'react'
import Main from '../../components/Main/Main'
import useFetch from '../../hooks/useFetch'
import Header from '../../components/Header/Header'

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState('')
	const { data: products, loading, error, fetchData } = useFetch()

	useEffect(() => {
		selectedCategory
			? fetchData(`products/category/${selectedCategory}`)
			: fetchData('products')
	}, [fetchData, selectedCategory])

	return (
		<div className='App'>
			<Header
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{products && <Main products={products} />}
		</div>
	)
}

export default Products
