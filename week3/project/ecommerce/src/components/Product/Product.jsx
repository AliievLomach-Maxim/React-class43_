import { useLocation, useNavigate } from 'react-router-dom'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import { ReactComponent as AddToFavorite } from '../../assets/heart-solid.svg'
import { ReactComponent as RemoveFromFavorite } from '../../assets/heart-regular.svg'

const Product = ({ item }) => {
	const navigate = useNavigate()
	const { favorite, toggleFavorite } = useFavoritesContext()
	const { pathname } = useLocation()

	const handleClick = (e, id) => {
		if (e.currentTarget.localName === 'span') {
			toggleFavorite(id)
			e.stopPropagation()
		} else
			navigate(
				pathname === '/favorites' ? `/product/${id}` : `product/${id}`
			)
	}

	return (
		<section
			key={item.id}
			onClick={(e) => handleClick(e, item.id.toString())}
		>
			<div className='card-product-header'>
				<img className='item-image' src={item.image} alt={item.title} />
				<span onClick={(e) => handleClick(e, item.id.toString())}>
					{favorite &&
					favorite.find((el) => el === item.id.toString()) ? (
						<AddToFavorite width={24} height={24} />
					) : (
						<RemoveFromFavorite width={24} height={24} />
					)}
				</span>
			</div>
			<h4>{item.title}</h4>
		</section>
	)
}

export default Product
