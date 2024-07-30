import CheckoutButton from "../data/checkoutButton";

function CheckoutSuccess() {

    return (
        <div className="text-center main-section">
            <span>Your order is successfully placed.</span>
            <CheckoutButton cartLength={true} btnName={'To store'} linkClass={'submit-button ms-3'} toLink='/' />
        </div>
    );
}

export default CheckoutSuccess;