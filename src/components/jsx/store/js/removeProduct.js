import totalCount from "./totalCount";
import totalSum from "./totalSum";

function removeFromCart(aCart, anItem) {
  let cartCopy;
  let productIndex;
  let newTotal;
  let newSum;

  cartCopy = [...aCart];
  productIndex = cartCopy.findIndex((product) => product.id === anItem.id);

  if (productIndex !== -1) {
    if (cartCopy[productIndex].quantity === 1) {
      cartCopy = [
        ...cartCopy.slice(0, productIndex),
        ...cartCopy.slice(productIndex + 1),
      ];
    } else {
      cartCopy = [
        ...cartCopy.slice(0, productIndex),
        {
          ...cartCopy[productIndex],
          quantity: cartCopy[productIndex].quantity - 1,
        },
        ...cartCopy.slice(productIndex + 1),
      ];
    }
  }

  newTotal = totalCount(cartCopy);
  newSum = totalSum(cartCopy);

  return { cart: cartCopy, total: newTotal, sum: newSum };
}

export default removeFromCart;
