import useStore from "../store/cartStore";
import { shallow } from "zustand/shallow";
import { Button } from "react-bootstrap";

function Checkout() {
  const { total, clearCart } = useStore(
    (state) => ({
      total: state.total,
      clearCart: state.clearCart
    }), 
    shallow,
  );
  return (
    <div>
        <div>Cart {total}</div>
        <Button onClick={ clearCart }>Empty cart</Button>
    </div>
    );
}

export default Checkout;