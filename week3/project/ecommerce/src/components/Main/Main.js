import './Main.css'
import Product from '../Product/Product'

function Main({ products }) {
	return (
		<div className='main'>
			{products.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</div>
	)
}
export default Main
