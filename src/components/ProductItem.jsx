import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
