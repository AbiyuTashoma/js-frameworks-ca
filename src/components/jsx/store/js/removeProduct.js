function removeFromCart(aCart, anItem) {
  let cartCopy;
  let productIndex;
  let newTotal;

  cartCopy = [...aCart];
  productIndex = cartCopy.findIndex((product) => product.id === anItem.id);

  if (productIndex !== -1) {
    cartCopy = [
      ...cartCopy.slice(0, productIndex),
      ...cartCopy.slice(productIndex + 1),
    ];
  }

  newTotal = cartCopy.reduce((currentTotal, product) => {
    currentTotal += product.quantity;
    return currentTotal;
  }, 0);

  console.log(cartCopy);

  return { cart: cartCopy, total: newTotal };
}

export default removeFromCart;
