import { useEffect, useState } from "react";
import { api } from "./api";
import "./App.css";
import { Task } from "./taskType";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get("tasks").then(({ data }) => {
      setTasks(data);
    });
  }, []);

  const handleDeleteTask = async (id: number) => {
    await api.delete("tasks/" + id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Tasks App</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.title}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.Status}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

{
  /* <select name="priority" id="priority">
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
</select> */
}
