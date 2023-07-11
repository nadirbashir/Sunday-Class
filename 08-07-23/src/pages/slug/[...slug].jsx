import { useRouter } from "next/router"

export default function (){
    const router = useRouter();
    if(!router.isReady){
        return <div>..Loading</div>
    }
    console.log(router.query);

    return <div>
        <h1>Slug Page</h1>
    </div>
}