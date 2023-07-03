import {data} from "../../utils";

export default function () {
    return <div>
        <h1>Catogeries List</h1>
        <ul>
            {data.map(item => (
                <li key={item.category}>
                    <a href={`/all-categories/${item.category}`}>
                        {item.category}
                    </a>
                </li>
            ))}
        </ul>
    </div>
}