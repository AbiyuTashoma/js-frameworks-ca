import { Link } from "react-router-dom";

function CheckoutSuccess() {

    return (
        <div className="text-center main-section">
            <span>Your order is successfully placed.</span>
            <Link className="submit-button ms-3" to="/">To store</Link>
        </div>
    );
}

export default CheckoutSuccess;