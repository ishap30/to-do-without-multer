import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const API = "http://localhost:5000";

  // Fetch todos
  useEffect(() => {
    fetch(`${API}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add todo
  const addTodo = async () => {
    const res = await fetch(`${API}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "New Todo",
        priority: "medium"
      })
    });

    const data = await res.json();
    setTodos(prev => [...prev, data]);
  };

  // 🔥 Toggle when clicked
  const toggleTodo = async (id) => {
    const res = await fetch(`${API}/todos/${id}/toggle`, {
      method: "PATCH"
    });

    const updated = await res.json();

    setTodos(prev =>
      prev.map(todo => (todo._id === id ? updated : todo))
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <button onClick={addTodo}>Add Todo</button>

      {todos.map(todo => (
        <div
          key={todo._id}
          onClick={() => toggleTodo(todo._id)}
          style={{
            cursor: "pointer",
            textDecoration: todo.completed ? "line-through" : "none",
            margin: "10px 0"
          }}
        >
          {todo.title} - {todo.priority}
        </div>
      ))}
    </div>
  );
}

export default App;