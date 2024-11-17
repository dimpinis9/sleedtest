import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  setTasks,
} from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import useFetch from "../hooks/useFetch";

function TaskManager() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch();

  useEffect(() => {
    if (data) {
      console.log("Fetched Data:", data);
      const formattedTasks = data.slice(0, 10).map((task, index) => ({
        id: task.id || `api-task-${index}`,
        title: task.title,
        completed: task.status === "completed",
      }));
      dispatch(setTasks(formattedTasks));
    }
  }, [data, dispatch]);

  const handleAddTask = (task) => {
    dispatch(
      addTask({
        ...task,
        id: `${Date.now()}-${Math.random()}`,
      })
    );
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
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTaskCompletion}
        />
      )}
    </div>
  );
}

export default TaskManager;
