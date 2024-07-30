function totalSum(items) {
  let totalSum;

  totalSum = items.reduce((currentSum, product) => {
    currentSum += product.quantity * product.discountedPrice;
    return currentSum;
  }, 0);

  return Math.round(totalSum);
}

export default totalSum;
