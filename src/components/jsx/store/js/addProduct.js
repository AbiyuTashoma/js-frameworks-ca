import totalCount from "./totalCount";
import totalSum from "./totalSum";

function addToCart(aCart, anItem) {
  let cartCopy;
  let productIndex;
  let newTotal;
  let newSum;

  cartCopy = [...aCart];
  productIndex = cartCopy.findIndex((product) => product.id === anItem.id);

  if (productIndex === -1) {
    cartCopy.push({
      id: anItem.id,
      title: anItem.title,
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

  newTotal = totalCount(cartCopy);
  newSum = totalSum(cartCopy);

  console.log(cartCopy, " ", newSum);

  return { cart: cartCopy, total: newTotal, sum: newSum };
}

export default addToCart;
