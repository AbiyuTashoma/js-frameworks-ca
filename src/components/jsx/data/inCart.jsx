import DisplayPrice from "./price";

function InCart (cart, product) {

    let itemIndex = cart.findIndex((item) => product.id === item.id);
    // productIndex = cartCopy.findIndex((product) => product.id === anItem.id);

    return ( itemIndex >= 0 &&
        <div className="incart">
            {/* <table>
                <tbody>
                    <tr>
                        <th>In cart:</th>
                        <td>{ cart[itemIndex].quantity }</td>
                    </tr>
                    <tr>
                        <th>Sub-total:</th>
                        <td>{DisplayPrice(product.price, product.discountedPrice, cart[itemIndex].quantity)}</td>
                    </tr>
                </tbody>
            </table> */}
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