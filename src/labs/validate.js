exports.validateProduct = (p) => {
  if (typeof p.name !== "string" || !p.name) return "Name must be string";
  if (typeof p.price !== "number" || p.price < 0)
    return "Price must be number >= 0";
  if (typeof p.categoryId !== "string" || !p.categoryId)
    return "categoryId must be string";
  return null;
};

exports.validateCategory = (c) => {
  if (typeof c.name !== "string" || !c.name) return "Name must be string";
  return null;
};
