import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}
