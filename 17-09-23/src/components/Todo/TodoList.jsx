import { useContext, useState } from "react";
import { Todo } from ".";
import NotificationCtx from "../../store/NotificationCtx";

const todosData = [
  { id: 1, todo: { text: "todo 1", desctiption: "example" } },
  { id: 2, todo: { text: "todo 3", desctiption: "example" } },
  { id: 3, todo: { text: "todo 3", desctiption: "example" } },
  { id: 4, todo: { text: "todo 4", desctiption: "example" } },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const { message } = useContext(NotificationCtx);
  console.log(message, "context");
  return (
    <div>
      {todos.map((item) => (
        <Todo key={item.id} todos={todos} item={item} setTodos={setTodos} />
      ))}
    </div>
  );
};
