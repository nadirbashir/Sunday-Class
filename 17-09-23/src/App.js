import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/HomePage";
import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { TodoList } from "./components/Todo/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/address" element={<div>address page</div>} />
        </Route>
        <Route path="/todo" element={<TodoList />} />
      </Route>
    </Routes>
    // <div>
    //   {todos.map(item => <Todo key={item.id} text={item.todo} />)}
    // </div>
  );
}

export default App;
