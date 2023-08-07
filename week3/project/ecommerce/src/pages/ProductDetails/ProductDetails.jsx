import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import { ReactComponent as AddToFavorite } from '../../assets/heart-solid.svg'
import { ReactComponent as RemoveFromFavorite } from '../../assets/heart-regular.svg'
import useFetch from '../../hooks/useFetch'
import './ProductDetails.css'

const ProductDetails = () => {
	const { favorite, toggleFavorite } = useFavoritesContext()
	const { id } = useParams()
	const { data: product, loading, error, fetchData } = useFetch()

	useEffect(() => {
		fetchData(`products/${id}`)
	}, [fetchData, id])

	return (
		<>
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{product && (
				<>
					<h1>{product.title}</h1>
					<div className='product'>
						<p>{product.description}</p>
						<div className='card-product'>
							<img src={product.image} alt={product.title} />
							<span
								onClick={() =>
									toggleFavorite(product.id.toString())
								}
							>
								{favorite &&
								favorite.find(
									(el) => el === product.id.toString()
								) ? (
									<AddToFavorite width={24} height={24} />
								) : (
									<RemoveFromFavorite
										width={24}
										height={24}
									/>
								)}
							</span>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default ProductDetails
