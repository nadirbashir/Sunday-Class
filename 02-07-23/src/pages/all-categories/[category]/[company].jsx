import { useRouter } from "next/router"
import { data } from "../../../utils"

export default function (){
    const router = useRouter()

    const dummyRequest = data.find(item => item.category === router.query.category)
    const company = dummyRequest?.companies.filter((c => c.company === router.query.company))
    if(!dummyRequest?.length && !company?.length){
        return <h1>no data found for {router.query.company} company</h1>
    }

    return <div>
        <h1>{router.query.company} product List Page</h1>
        {company.map(i => (
            <div key={i.id}>
                <h1>{i.category}</h1>
                <p>{i.company}</p>
            </div>
            ))}
    </div>
}