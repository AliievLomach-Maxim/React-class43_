import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/ProductDetails/ProductDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Products />} />
			<Route path='/:id' element={<ProductDetails />} />
		</Routes>
	)
}

export default App
