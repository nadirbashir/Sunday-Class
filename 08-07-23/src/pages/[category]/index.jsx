import Link from "next/link";
import { useRouter } from "next/router";
import { getItems } from "../../../dummy_data";

export default function (){
    const router = useRouter();
    if(!router.isReady){
        return <div>..Loading</div>
    }
    // console.log(router.pathname)
    const response = getItems(router.query.category);

    const gotoDetailPage = () => {
        // alternate navigation
        router.push({
          pathname: '/clients/[id]/[clientprojectid]',
          query: { category: 'furniture', id: 4 },
        });
    }

    return <div>
        <h1>{router.query.category} list</h1>
        {response?.map(item => (
            <Link key={item.id} href={`/${item.category}/${item.id}`}>{item.name}</Link>
        ))}
        {/* alternate dynamic navigation */}
        <div>
            <button onClick={gotoDetailPage}>mobile detail</button>
        </div>
    </div>
}