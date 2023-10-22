const express = require("express");
const app = express();

const productsPath = require("./routes/products");

app.use((req, res, next) => {
  console.log("Hello from server"); // validations auth
  next();
});

app.use("/products", (req, res, next) => {
  req.data = "Mobile";
  next();
});

app.use("/products", productsPath);

app.get("/search", (req, res, next) => {
  const { q } = req.query;
  if (!q) {
    res.send("item not found");
  }
  res.send(q);
});

app.use("/", (req, res, next) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
