import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export const useFavoritesContext = () => useContext(FavoritesContext)

const FavoritesProvider = ({ children }) => {
	const [favorite, setFavorite] = useState(null)
	const toggleFavorite = (id) => {
		favorite && favorite.find((el) => el === id)
			? setFavorite((prev) => prev.filter((el) => el !== id))
			: setFavorite((prev) => (prev ? [...prev, id] : [id]))
	}
	return (
		<FavoritesContext.Provider value={{ favorite, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	)
}

export default FavoritesProvider
