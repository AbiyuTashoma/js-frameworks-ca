import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo-container">
            <Link className="logo" to="/">eCom.</Link>
        </div>
    );
}

export default Logo;