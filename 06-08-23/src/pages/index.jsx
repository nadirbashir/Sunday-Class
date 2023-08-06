import Item from "@/components/Item";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div className="product-list">
      {products.map((product, ind) => (
        <Item key={ind} item={product} />
      ))}
    </div>
  );
}
export default Home;
