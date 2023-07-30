import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products/');
  const data = await res.json()

  console.log('incremental static regeneration ');
  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

function Home(props) {
  const { products } = props;
  
  return (
    <>
      <h1>product</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home