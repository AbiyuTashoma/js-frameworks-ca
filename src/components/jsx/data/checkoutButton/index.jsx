function CheckoutButton ({cartLength, linkClass, toLink}) {
    return (
        cartLength ?
            <div className="mt-4">
                <a className={linkClass} href={toLink}>Checkout</a>
            </div>
        : ""
    );
}

export default CheckoutButton;