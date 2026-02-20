const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../../data/products.json");
const categoriesPath = path.join(__dirname, "../../data/categories.json");

// خواندن فایل JSON
function read(file) {
  return JSON.parse(fs.readFileSync(file));
}

// نوشتن در فایل JSON
function write(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

/* PRODUCTS */
exports.listProducts = () => read(productsPath);
exports.saveProducts = (data) => write(productsPath, data);

/* CATEGORIES */
exports.listCategories = () => read(categoriesPath);
exports.saveCategories = (data) => write(categoriesPath, data);
