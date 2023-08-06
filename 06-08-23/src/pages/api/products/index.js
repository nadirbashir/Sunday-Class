import { addProduct, getAllProducts } from "@/services/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getAllProducts();
    return res.status(200).json(products);
  }
  if (req.method === "POST") {
    const { title, price, description } = req.body;
    const updatedProducts = addProduct(title, price, description);
    return res.status(201).json(updatedProducts);
  }
  return res.status(404).json({ message: "Not found" });
}
