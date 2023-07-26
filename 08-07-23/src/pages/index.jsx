import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const router = useRouter();
  useEffect(()=>{
    
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(json))
            
  },[])
  const gotoAboutPage = () => {
    // router.push('/about');
    router.push({
      pathname: "/about",
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/car">car</Link>
        </li>
        <li>
          <Link href="/mobile">mobile</Link>
        </li>
        <li>
          <button onClick={gotoAboutPage}>go to about page</button>
        </li>
      </ul>
    </>
  );
}
export default Home;
