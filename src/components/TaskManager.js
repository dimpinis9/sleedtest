import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTaskCompletion } from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  console.log("Tasks from Redux store:", tasks);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTaskCompletion}
      />
    </div>
  );
}

export default TaskManager;
