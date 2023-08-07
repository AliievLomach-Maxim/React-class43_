import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/ProductDetails/ProductDetails'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/products/:id' element={<ProductDetails />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
