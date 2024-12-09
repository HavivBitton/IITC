import { useRef, useState, useEffect } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

const TODOS = [
  { id: "111", text: "clean", completed: false, description: "clean room" },
  { id: "112", text: "clean2", completed: true },
];

function App() {
  const [Todos, setTodos] = useState<Todo[]>([]);
  const textInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  const handleAdd = () => {
    if (!textInputRef.current?.value) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: textInputRef.current.value,
      completed: false,
      description: descriptionInputRef.current?.value || "",
    };

    setTodos((prev) => [...prev, newTodo]);

    textInputRef.current.value = "";
    if (descriptionInputRef.current) {
      descriptionInputRef.current.value = "";
    }
  };

  const handleToggleCompleted = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ marginLeft: " 20px" }}>
      <h1>Learn TypeScript ToDo List</h1>
      {Todos.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompleted(task.id)}
          />
          <div>
            <h2
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </h2>
            <p>{task.description}</p>
          </div>
          <button onClick={() => handleDelete(task.id)}>Delete ToDo</button>
        </div>
      ))}
      <input type="text" ref={textInputRef} placeholder="Add ToDo" />
      <input
        type="text"
        ref={descriptionInputRef}
        placeholder="Add Description (Optional)"
      />
      <button onClick={handleAdd}>Add ToDo</button>
    </div>
  );
}

export default App;
