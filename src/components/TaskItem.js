import React from "react";
import { useDrag } from "react-dnd";
import "./styles/TaskItem.css";

const TaskItem = ({ task, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="task-item"
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? "#e0f7fa" : "white",
      }}
    >
      <span>{task.title}</span>
      <button onClick={() => onDelete && onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
