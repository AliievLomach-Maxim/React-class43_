import './Header.css'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

function Header({ selectedCategory, setSelectedCategory }) {
	const { data: categories, error, fetchData } = useFetch()

	useEffect(() => {
		fetchData('products/categories')
	}, [fetchData])

	const handleClick = (category) => {
		setSelectedCategory(selectedCategory === category ? '' : category)
	}

	return (
		<>
			{error && <h2>{error}</h2>}
			{categories && (
				<nav className='nav-menu'>
					<ul className='categories-list'>
						{categories.map((category) => (
							<li
								key={category}
								onClick={() => handleClick(category)}
								className={`category ${
									selectedCategory === category && 'active'
								}`}
							>
								{category}
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	)
}
export default Header
