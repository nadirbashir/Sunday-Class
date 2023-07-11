import { useRouter } from "next/router"

export default function (){
    const router = useRouter();
    // console.log(router.pathname)
    console.log(router.query) // fetch data using query
    return <div>
        <h1>{router.query.productDetail} Detail Page</h1>
    </div>
}