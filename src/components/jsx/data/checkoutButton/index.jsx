import { Link } from "react-router-dom";

function CheckoutButton ({cartLength, btnName, linkClass, toLink}) {
    return (
        cartLength &&
            <div className="mt-4">
                <Link to={toLink} className={linkClass}>{ btnName }</Link>
            </div>
    );
}

export default CheckoutButton;