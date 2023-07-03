import { useRouter } from "next/router"
import { data } from "../../../utils"

export default function () {
    const router = useRouter()
    const category = router.query.category

    const dummyRequest = data.find(item => item.category === category)
    if (!dummyRequest) {
        return <h1>no data found for {category} company</h1>
    }
    console.log(dummyRequest);

    return <div>
        {dummyRequest.companies.map(i => (
            <div key={i.id}>
                <h1>{i.category}</h1>
                <p>{i.company}</p>
                <a href={`/all-categories/${i.category}/${i.company}`}>Go to {i.category}</a>
            </div>
        ))}
    </div>
}