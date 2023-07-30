import './Header.css'
import categories from '../fake-data/all-categories'
import { useEffect, useState } from 'react'

function Header(props) {
	const [selectedCategory, setSelectedCategory] = useState('')

	const handleClick = (category) => {
		setSelectedCategory(selectedCategory === category ? '' : category)
	}

	useEffect(() => {
		props.filter(selectedCategory)
	}, [props, selectedCategory])

	return (
		<div className='header'>
			<h1>Products</h1>
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
		</div>
	)
}
export default Header
