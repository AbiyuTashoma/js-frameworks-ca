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
        <div className="cart-body main-section">
            <div className="show-cart">
                <table className="table table-striped cart-table">
                    <thead>
                        <th>Title</th>
                        <th>Count</th>
                        <th>Sub-total</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {cart.map((item) =>
                            <tr className="cart-row" key={item.id}>
                                <td className="pe-2">{item.title}</td>
                                <td className="pe-2">{item.quantity}</td>
                                <td className="pe-2">{DisplayPrice(item.price, item.discountedPrice, item.quantity)}</td>
                                <td>
                                    <div className="button-cell-width">
                                        <Button className="me-1" variant="success" size="sm" onClick={() => addProduct(item)}>+</Button>
                                        <Button variant="danger" size="sm" onClick={() => removeProduct(item) }>-</Button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Total:</td>
                            <td>{sum}&nbsp;{currency}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="mt-4 text-center">
                <Link className="checkout-button me-3" to="/checkout-success">Checkout</Link>
                <Button onClick={ clearCart } variant="secondary">Empty cart</Button>
            </div>
        </div>
        : <div className="cart-body text-center main-section">There are no items in your cart</div>
    );
}

export default ShowCart;