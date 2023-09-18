import { Link, Outlet } from "react-router-dom"

export const Layout = () => {

    return <div>
        <h1 style={{backgroundColor: 'maroon', color: 'white'}}>Header</h1>
        <Link to="/about">go to About</Link>
        <Outlet />
        </div>
}