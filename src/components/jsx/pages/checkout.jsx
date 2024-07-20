import useStore from "../store/cartStore";
import { shallow } from "zustand/shallow";
import ShowCart from "../data/showCart";

function Checkout() {
  const { cart, clearCart } = useStore(
    (state) => ({
      cart: state.cart,
      total: state.total,
      clearCart: state.clearCart
    }), 
    shallow,
  );
  return (
    <div>{ShowCart(cart, clearCart)}</div>
    );
}

export default Checkout;