import Item from "../Item";
import classes from "../../styles/List.module.css";

export function List({ handleDelete, data }) {
  return (
    <ul className={`bg-color ${classes["list-container"]}`}>
      {data.map((item) => (
        <Item onDelete={handleDelete} key={item.id} item={item} />
      ))}
    </ul>
  );
}
