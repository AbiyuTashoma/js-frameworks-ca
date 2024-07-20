import useStore from "../store/cartStore";
import { shallow } from "zustand/shallow";
import ShowCart from "../data/showCart";

function Checkout() {
  const { cart, sum, clearCart } = useStore(
    (state) => ({
      cart: state.cart,
      sum: state.sum,
      clearCart: state.clearCart
    }), 
    shallow,
  );
  return (
    <div>{ShowCart(cart, sum, clearCart)}</div>
    );
}

export default Checkout;