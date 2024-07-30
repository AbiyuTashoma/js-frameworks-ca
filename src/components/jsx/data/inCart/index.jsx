import DisplayPrice from "../price";

function InCart (cart, product) {

    let itemIndex = cart.findIndex((item) => product.id === item.id);

    return ( itemIndex >= 0 &&
        <div className="incart">
            <div>
                <div>In cart:</div>
                <div>{ cart[itemIndex].quantity }</div></div>
            <div>
                <div>Sub-total:</div>
                <div>{DisplayPrice(product.price, product.discountedPrice, cart[itemIndex].quantity)}</div>
            </div>
        </div>
    );
}

export default InCart;