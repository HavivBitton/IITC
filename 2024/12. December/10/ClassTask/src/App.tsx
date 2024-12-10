import { useEffect, useState } from "react";
import { Todo } from "./types";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() && !todos.some((todo) => todo.text === newTodo.trim())) {
      setTodos([
        ...todos,
        { id: crypto.randomUUID(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>TypeScript ToDo List </h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}> Add Todo</button>

      <div>
        <button onClick={() => setFilter("all")}> All </button>
        <button onClick={() => setFilter("active")}> Active </button>
        <button onClick={() => setFilter("completed")}> Completed </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed </button>
      <div>
        <p>Total: {todos.length}</p>
        <p>Active:{todos.filter((todo) => !todo.completed).length}</p>
        <p>Completed:{todos.filter((todo) => todo.completed).length}</p>
      </div>
    </div>
  );
}

export default App;
