import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer>
        <div>&#169; eCom 2024</div>
        <ul className="navigation footer-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </footer>
    );
}

export default Footer;