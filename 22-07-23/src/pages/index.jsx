import Link from "next/link";

export async function getStaticProps () {

  const response = await fetch('https://dummyjson.com/products/')
  const data = await response.json() 

  if(!data){
    return {
      notFound: true
    }
  }

  return {
    props: { 
      products: data.products
    },
  }
}

function Home(props) {
  const { products } = props;
  
  return (
    <>
      <h1>Home Page</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
        ))}
      </ul>
    </>
  );
}
export default Home;
