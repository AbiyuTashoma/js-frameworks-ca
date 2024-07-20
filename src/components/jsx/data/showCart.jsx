import useStore from "../store/cartStore";
import { shallow } from "zustand/shallow";
import DisplayPrice from "./price";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { currency } from "./js/constants";

function ShowCart () {
    
    const { cart, sum, addProduct, removeProduct, clearCart } = useStore(
    (state) => ({
        cart: state.cart,
        sum: state.sum,
        addProduct: state.addProduct,
        removeProduct: state.removeProduct,            
        clearCart: state.clearCart
    }), 
    shallow,
    );

    const cartLength = cart.length;
    
    return ( cartLength > 0 ?
        <div>
            <div className="show-cart">
                {cart.map((item) =>
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.quantity}</div>
                        {DisplayPrice(item.price, item.discountedPrice, item.quantity)}
                        <Button className="me-3" variant="success" size="sm" onClick={() => addProduct(item)}>+</Button>
                        <Button variant="danger" size="sm" onClick={() => removeProduct(item) }>-</Button>
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