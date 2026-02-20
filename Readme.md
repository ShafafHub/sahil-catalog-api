# Catalog API

REST API for products and categories.

## Run server

```bash
npm install
npm run dev


# -----------------------------
# Catalog API Test - PowerShell
# -----------------------------

```

# 1️⃣ Health Check

Write-Host
Invoke-WebRequest http://localhost:3000/health -UseBasicParsing

```

# 2️⃣ GET /products -

Invoke-WebRequest http://localhost:3000/products -UseBasicParsing

```

# 3️⃣ GET /products/:id (p1) -

Invoke-WebRequest http://localhost:3000/products/p1 -UseBasicParsing

```

# 4️⃣ POST /products -

Invoke-WebRequest http://localhost:3000/products -Method Post -Body '{"name":"Mouse","price":20,"categoryId":"c2"}' -ContentType "application/json" -UseBasicParsing

```

# 5️⃣ PUT /products/:id (p2) -

Invoke-WebRequest http://localhost:3000/products/p3 -Method Put -Body '{"name":"Notebook Updated","price":50,"categoryId":"c1"}' -ContentType "application/json" -UseBasicParsing

```````````````

# 6️⃣ DELETE /products/:id (p1) -

Invoke-WebRequest http://localhost:3000/products/p1 -Method Delete -UseBasicParsing

``````````````

# 7️⃣ GET /categories -

Invoke-WebRequest http://localhost:3000/categories -UseBasicParsing

```````````````

# 8️⃣ GET /categories/:id (c2) -

Invoke-WebRequest http://localhost:3000/categories/c2 -UseBasicParsing

``````````````````
# 9️⃣ POST /categories -

Invoke-WebRequest http://localhost:3000/categories -Method Post -Body '{"name":"Furniture"}' -ContentType "application/json" -UseBasicParsing

`````````````````

# 🔟 PUT /categories/:id (c1) -
Write-Host "🔟 PUT /categories/c1"
Invoke-WebRequest http://localhost:3000/categories/c1 -Method Put -Body '{"name":"Office Updated"}' -ContentType "application/json" -UseBasicParsing

```````````````

# 11️⃣ DELETE /categories/:

Invoke-WebRequest http://localhost:3000/categories/c2 -Method Delete -UseBasicParsing

```````````````

# 12️⃣ Search products
Write-Host "12️⃣ Search products (Notebook)"
Invoke-WebRequest "http://localhost:3000/products?search=Notebook" -UseBasicParsing

`````````````````
# 13️⃣ Pagination products
Write-Host "13️⃣ Pagination products ?limit=2&offset=1"
Invoke-WebRequest "http://localhost:3000/products?limit=2&offset=1" -UseBasicParsing

`````````

Link of Video
https://drive.google.com/file/d/1Jq-mgsD6-Y59FQJzxqfoHev7aMXCDh_0/view?usp=drive_link
``````````````````
