import './Header.css'
import categories from '../fake-data/all-categories'
import { useState } from 'react'

function Header(props) {
	const [selectedCategory, setSelectedCategory] = useState('')

	const handleClick = (category) => {
		props.filter(selectedCategory === category ? '' : category)
		setSelectedCategory(selectedCategory === category ? '' : category)
	}

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
