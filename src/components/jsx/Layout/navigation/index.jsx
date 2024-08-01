import { Link } from "react-router-dom";
import useStore from "../../store/cartStore";
import { shallow } from "zustand/shallow";
import Cart from "../cart";

function Nav() {
    const { cart, total } = useStore(
    (state) => ({
      cart: state.cart,
      total: state.total,
    }), 
    shallow,
  );
    return (
        <ul className="navigation">
            <li><Link className="menu" to="/">Home</Link></li>
            <li>{Cart(cart.length, total)}</li>
        </ul>
    );
}

export default Nav;