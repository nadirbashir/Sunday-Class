import { useRouter } from "next/router"
import { getItemDetails } from "../../../dummy_data";

export default function (){
    const router = useRouter();
    if(!router.isReady){
        return <div>..Loading</div>
    }
    const itemDetail = getItemDetails(router.query.category ,router.query.id)
    console.log(itemDetail);
    if(!itemDetail){
        return <div>Data Not Found</div>
    }
    return <div>
        <h1>{itemDetail.detail}</h1>
    </div>
}