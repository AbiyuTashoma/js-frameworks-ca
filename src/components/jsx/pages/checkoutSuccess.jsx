import { Link } from "react-router-dom";
import useStore from "../store/cartStore";
import { shallow } from "zustand/shallow";

function CheckoutSuccess() {
    const { clearCart } = useStore(
        (state) => ({
        clearCart: state.clearCart
        }), 
        shallow,
    );

    clearCart();

    return (
        <div className="text-center">
            <span>Your order is successfully placed.</span>
            <Link className="submit-button ms-3" to="/">To store</Link>
        </div>
    );
}

export default CheckoutSuccess;