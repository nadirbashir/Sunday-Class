
export async function getStaticPaths () {

    return {
        paths: [
            {params: {pid: '1'}},
            {params: {pid: '2'}},
            {params: {pid: '3'}},
            {params: {pid: '4'}},
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await response.json() 
  
    return {
        props: {
            productDetail: data
        }
    }
}

export default function ProductDetailPage (props) {

    const { productDetail } = props;

    return (
        <div>{productDetail.description}</div>
    )
}