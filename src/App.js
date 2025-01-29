import React, { useState } from "react";

function App() {
  // State to store the list of tasks and the current input
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to add a new task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput(""); // Clear the input field
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          style={{
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        onClick={addTask}
        style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
      <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "#FF4C4C",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
