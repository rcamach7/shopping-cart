import "../scss/Products.scss";
import CarProduct from "../components/CarProduct";

function Products(props) {
  return (
    <main className="Products">
      {props.cars.map((car, i) => (
        <CarProduct key={i} car={car} updateCart={props.updateCart} />
      ))}
    </main>
  );
}

export default Products;
