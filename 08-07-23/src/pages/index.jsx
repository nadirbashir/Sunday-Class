import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

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
