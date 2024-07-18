function addToCart(aCart, anItem) {
  let cartCopy;
  let productIndex;
  let newTotal;

  cartCopy = [...aCart];
  productIndex = cartCopy.findIndex((product) => product.id === anItem.id);

  if (productIndex === -1) {
    cartCopy.push({
      id: anItem.id,
      quantity: 1,
      discountedPrice: anItem.discountedPrice,
      price: anItem.price,
    });
  } else {
    cartCopy = [
      ...cartCopy.slice(0, productIndex),
      {
        ...cartCopy[productIndex],
        quantity: cartCopy[productIndex].quantity + 1,
      },
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

export default addToCart;
