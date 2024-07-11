import { Link } from "react-router-dom";
import Search from "./search";

function Nav() {
    return (
        <ul className="navigation">
            <li><Link className="menu" to="/">Home</Link></li>
            <li><Search /></li>
            <li><Link className="menu" to="/cart">Cart</Link></li>
        </ul>
    );
}

export default Nav;