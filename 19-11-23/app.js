const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const express = require("express");
const app = express();

const { mongoose } = require('./db/connection');
const { Product } = require('./models/product.js');

// myblog.save()
// myblog.greet();
// product.greet();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.json()); // parse json data
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const products = [
  { id: uuidv4(), name: "latop" },
  { id: uuidv4(), name: "mobile" },
];

app.get("/products", async (req, res) => {
  const foundProducts = await Product.find({});
  res.render("products/index", { products : foundProducts});
});
app.post("/products", async (req, res) => {
  // TODO also add Poduct other fields data from fronted
  const { title } = req.body;
  
  const addProduct = new Product({
    title: title,
    price: 20,
    category: 'fruit'
  })
  const result = await addProduct.save();
  console.log(result)
  res.redirect("/products");
});
app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { updatedname } = req.body;

  const product = products.find((p) => p.id === id);
  product.name = updatedname;
});

app.get("/products/new", (req, res) => {
  res.render("products/createproduct");
});
app.get("/products/update/:id", (req, res) => {
  const { id } = req.params;
  res.render("products/update", { id });
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});

// GET /products get all products
// POST /products create new products
// PATCH /products/:id update product
// GET /products/:id get single product
// Delete /products/:id delete single product
