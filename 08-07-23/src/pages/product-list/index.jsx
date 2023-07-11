import Link from "next/link";

export default function (){
    return <div>
        <h1>Product List Page</h1>
        <Link href="/product-list/iphone">iphone 5</Link>
        <br />
        <Link href="/product-list/alto">alto</Link>
        <br />
        <Link href="/product-list/sofa">sofa</Link>
    </div>
}