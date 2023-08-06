import Link from "next/link";

import classes from "./Header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Online Shop</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          {router.pathname === "/" ? (
            <li>
              <Link href="/new-product">Add New Product</Link>
            </li>
          ) : (
            <li>
              <Link href="/">Browse All Products</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
