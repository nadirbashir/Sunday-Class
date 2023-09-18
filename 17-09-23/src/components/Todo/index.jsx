import { useContext, useState } from "react";
import classes from "./todo.module.css";
import NotificationCtx from "../../store/NotificationCtx";

export const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const { item, todos, setTodos } = props;
  const [todo, setTodo] = useState(item.todo.text);
  const { showNotification, hideNotification } = useContext(NotificationCtx);

  const onEdit = () => {
    setIsEdit(true);
  };
  const onUpdate = () => {
    setIsEdit(false);
    const updatedTodo = todos.map((i) => {
      if (i.id === item.id) {
        return { ...i, todo: { ...i.todo, text: todo } };
      }
      return i;
    });
    setTodos(updatedTodo);
  };

  return (
    <div className={classes["todo-card"]}>
      {isEdit ? (
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      ) : (
        <p>{todo}</p>
      )}
      <div>
        {!isEdit ? (
          <button onClick={onEdit}>Edit</button>
        ) : (
          <button onClick={onUpdate}>update</button>
        )}
        <button
          onClick={() => showNotification("Are you sure you want to delete")}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
