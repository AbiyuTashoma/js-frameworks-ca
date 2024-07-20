import DisplayPrice from "./price";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { currency } from "./js/constants";

function ShowCart (cart, sum, clearCart) {

    const cartLength = cart.length;
    return ( cartLength > 0 ?
        <div>
            <div className="show-cart">
                {cart.map((item) =>
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.quantity}</div>
                        {DisplayPrice(item.price, item.discountedPrice, item.quantity)}
                    </div>
                )}
            </div>
            <div>Total: {sum}&nbsp;{currency}</div>
            <div className="mt-4">
                <Link className="checkout-button" to="/checkout">Checkout</Link>
                <Button onClick={ clearCart } variant="secondary">Empty cart</Button>
            </div>
        </div>
        : "There are no items in your cart"
    );
}

export default ShowCart;