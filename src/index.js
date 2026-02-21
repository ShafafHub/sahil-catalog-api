const express = require("express");
const app = express();
const store = require("./labs/store");
const { validateProduct, validateCategory } = require("./labs/validate");

app.use(express.json());

/* Health check */
app.get("/health", (req, res) => res.json({ status: "ok" }));

/* ---------------------- PRODUCTS ---------------------- */

// GET /products + search + pagination
app.get("/products", (req, res) => {
  let products = store.listProducts();

  if (req.query.search) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(req.query.search.toLowerCase()),
    );
  }

  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset) || 0;
  if (!isNaN(limit)) products = products.slice(offset, offset + limit);

  res.json(products);
});

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const product = store.listProducts().find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

// POST /products
app.post("/products", (req, res) => {
  const error = validateProduct(req.body);
  if (error) return res.status(400).json({ error });

  const products = store.listProducts();
  const newProduct = { id: `p${Date.now()}`, ...req.body };
  products.push(newProduct);
  store.saveProducts(products);

  res.status(201).json(newProduct);
});

// PUT /products/:id
app.put("/products/:id", (req, res) => {
  const products = store.listProducts();
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  const error = validateProduct(req.body);
  if (error) return res.status(400).json({ error });

  products[index] = { id: req.params.id, ...req.body };
  store.saveProducts(products);

  res.json(products[index]);
});

// DELETE /products/:id
app.delete("/products/:id", (req, res) => {
  const products = store.listProducts();
  const filtered = products.filter((p) => p.id !== req.params.id);
  if (products.length === filtered.length)
    return res.status(404).json({ error: "Not found" });

  store.saveProducts(filtered);
  res.json({ message: "Deleted" });
});

/* ---------------------- CATEGORIES ---------------------- */

// GET /categories + search + pagination
app.get("/categories", (req, res) => {
  let categories = store.listCategories();

  if (req.query.search) {
    categories = categories.filter((c) =>
      c.name.toLowerCase().includes(req.query.search.toLowerCase()),
    );
  }

  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset) || 0;
  if (!isNaN(limit)) categories = categories.slice(offset, offset + limit);

  res.json(categories);
});

// GET /categories/:id
app.get("/categories/:id", (req, res) => {
  const category = store.listCategories().find((c) => c.id === req.params.id);
  if (!category) return res.status(404).json({ error: "Not found" });
  res.json(category);
});

// POST /categories
app.post("/categories", (req, res) => {
  const error = validateCategory(req.body);
  if (error) return res.status(400).json({ error });

  const categories = store.listCategories();
  const newCategory = { id: `c${Date.now()}`, ...req.body };
  categories.push(newCategory);
  store.saveCategories(categories);

  res.status(201).json(newCategory);
});

// PUT /categories/:id
app.put("/categories/:id", (req, res) => {
  const categories = store.listCategories();
  const index = categories.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  const error = validateCategory(req.body);
  if (error) return res.status(400).json({ error });

  categories[index] = { id: req.params.id, ...req.body };
  store.saveCategories(categories);

  res.json(categories[index]);
});

// DELETE /categories/:id
app.delete("/categories/:id", (req, res) => {
  const categories = store.listCategories();
  const filtered = categories.filter((c) => c.id !== req.params.id);
  if (categories.length === filtered.length)
    return res.status(404).json({ error: "Not found" });

  store.saveCategories(filtered);
  res.json({ message: "Deleted" });
});

/* ---------------------- START SERVER ---------------------- */
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on 3000"));
}

module.exports = app;
