
export async function getStaticPaths () {
  console.log('getstatic props runs once========1');
    const res = await fetch(`https://dummyjson.com/products/`);
    const data = await res.json();
    const pids = data.products.map((p) =>{
         return {params: {pid: p.id.toString()}}
        });
    
    return {
        paths: pids,
        fallback: 'blocking' //true // false
    }

}

export async function getStaticProps(context) {
    const { params } = context;

    const res = await fetch(`https://dummyjson.com/products/${params.pid}`);
    const data = await res.json();
  
    if(!data){
      return {
        notFound: true
      }
    }

    // console.log(data); runs on server
    return {
      props: {
        productDetail: data
      },
    }
  }

export default function ProductDetailPage (props){
    const { productDetail } = props;
    
    return (
        <div>{productDetail.description}</div>
    )
}