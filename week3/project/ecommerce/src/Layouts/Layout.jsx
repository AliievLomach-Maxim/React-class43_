import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
	const { pathname } = useLocation()

	return (
		<div className='container'>
			<div className='header'>
				<h1>{pathname === '/favorites' ? 'Favorites' : 'Products'}</h1>
				<nav className='header-nav'>
					<NavLink to='/'>Products</NavLink>
					<span>|</span>
					<NavLink to='/favorites'>Favorites</NavLink>
				</nav>
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
