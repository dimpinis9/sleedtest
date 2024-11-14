import React from "react";
import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onAdd({ id: Date.now(), title, completed: false });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
