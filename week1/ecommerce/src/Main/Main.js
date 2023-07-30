import "./Main.css";

function Main({ products }) {
  return (
    <div className="main">
      {products.map((item) => (
        <section key={item.id}>
          <img className="item-image" src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </section>
      ))}
    </div>
  );
}
export default Main;
