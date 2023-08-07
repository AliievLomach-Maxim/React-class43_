import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../../pages/Products/Products'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import ProductFavorites from '../../pages/ProductFavorites/ProductFavorites'
import Layout from '../../Layouts/Layout'
import FavoritesProvider from '../../Context/FavoritesContext'

const App = () => {
	return (
		<BrowserRouter>
			<FavoritesProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Products />} />
						<Route
							path='favorites'
							element={<ProductFavorites />}
						/>
						<Route
							path='product/:id'
							element={<ProductDetails />}
						/>
					</Route>
				</Routes>
			</FavoritesProvider>
		</BrowserRouter>
	)
}

export default App
