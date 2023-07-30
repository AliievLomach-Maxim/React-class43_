import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../api/api'
import { useEffect } from 'react'
import './ProductDetails.css'

const ProductDetails = () => {
	const [product, setProduct] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const { id } = useParams()

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setIsLoading(true)
				const productData = await getSingleProduct(id)
				setProduct(productData)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		id && fetchProduct()
	}, [id])

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{product && (
				<>
					<h1>{product.title}</h1>
					<div className='product'>
						<p>{product.description}</p>
						<img src={product.image} alt={product.title} />
					</div>
				</>
			)}
		</>
	)
}

export default ProductDetails
