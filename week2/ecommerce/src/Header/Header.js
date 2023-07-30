import './Header.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllCategories } from '../api/api'

function Header({ selectedCategory, setSelectedCategory }) {
	const [categories, setCategories] = useState(null)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const catagoriesData = await getAllCategories()
				setCategories(catagoriesData)
			} catch (error) {
				setError(error.message)
			}
		}
		fetchCategories()
	}, [])

	const handleClick = (category) => {
		setSelectedCategory(selectedCategory === category ? '' : category)
	}

	return (
		<div className='header'>
			<h1>Products</h1>
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
		</div>
	)
}
export default Header
