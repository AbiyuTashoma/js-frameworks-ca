function totalCount(items) {
  let totalCount;

  totalCount = items.reduce((currentTotal, product) => {
    currentTotal += product.quantity;
    return currentTotal;
  }, 0);

  return totalCount;
}

export default totalCount;
