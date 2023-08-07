import { Link } from 'react-router-dom'
import './Main.css'

function Main({ products }) {
	return (
		<div className='main'>
			{products.map((item) => (
				<section key={item.id}>
					<Link to={`products/${item.id}`}>
						<img
							className='item-image'
							src={item.image}
							alt={item.title}
						/>
						<h4>{item.title}</h4>
					</Link>
				</section>
			))}
		</div>
	)
}
export default Main
