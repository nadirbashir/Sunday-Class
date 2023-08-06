import { getProductById } from "@/services/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.query);
    const { pid } = req.query;
    const product = getProductById(Number(pid));
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: "Not found" });
}
