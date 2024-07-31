function inArray(items, item) {
  const itemIndex = items.findIndex((element) => element.id === item.id);
  return itemIndex >= 0;
}

export default inArray;
