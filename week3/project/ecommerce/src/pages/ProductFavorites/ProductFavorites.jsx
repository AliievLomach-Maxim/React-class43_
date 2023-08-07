import { useEffect } from 'react'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import Product from '../../components/Product/Product'
import useFetch from '../../hooks/useFetch'

const ProductFavorites = () => {
	const { favorite } = useFavoritesContext()

	const { response: products, loading, error, fetchMultiple } = useFetch()

	useEffect(() => {
		const fetchFavoriteProducts = async () => {
			if (favorite && favorite.length > 0) {
				const urls = favorite.map((item) => `products/${item}`)
				fetchMultiple(urls)
			}
		}

		fetchFavoriteProducts()
	}, [favorite, fetchMultiple])

	return (
		<>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{products &&
				products.map((item) => <Product item={item} key={item.id} />)}
			{!loading && !products && (
				<p>Products Favorites You haven't chosen any favorites yet!</p>
			)}
		</>
	)
}

export default ProductFavorites
