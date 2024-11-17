import React from "react";
import TaskItem from "./TaskItem";
import { useDrop } from "react-dnd";
import "./styles/TaskList.css";

const TaskList = ({ tasks, onDelete, onDragAndDrop }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      if (onDragAndDrop) {
        onDragAndDrop(item);
      }
    },
  });

  return (
    <div className="task-list" ref={drop}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
