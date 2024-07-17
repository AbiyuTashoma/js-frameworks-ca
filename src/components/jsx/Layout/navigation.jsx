import { Link } from "react-router-dom";
import Search from "./search";
import useStore from "../store/cart";
import { shallow } from "zustand/shallow";

function Nav() {
    const { total } = useStore(
    (state) => ({
      total: state.total,
    }), 
    shallow,
  );
    return (
        <ul className="navigation">
            <li><Link className="menu" to="/">Home</Link></li>
            <li><Search /></li>
            <li><Link className="menu" to="/cart">Cart {total}</Link></li>
        </ul>
    );
}

export default Nav;