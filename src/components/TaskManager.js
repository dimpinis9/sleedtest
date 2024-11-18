import React, { useEffect, useCallback, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  setTasks,
} from "../redux/taskSlice";
import TaskForm from "./TaskForm";
import useFetch from "../hooks/useFetch";
import TaskList from "./TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles/Theme.css";
import "./styles/SearchBar.css";

function TaskManager() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data) {
      const formattedTasks = data.slice(0, 10).map((task, index) => ({
        id: task.id || `api-task-${index}`,
        title: task.title,
        completed: task.status === "completed",
      }));
      dispatch(setTasks(formattedTasks));
      localStorage.setItem("tasks", JSON.stringify(formattedTasks));
    }
  }, [data, dispatch]);

  const handleAddTask = useCallback(
    (task) => {
      const newTask = {
        ...task,
        id: `${Date.now()}-${Math.random()}`,
        completed: false,
      };

      dispatch(addTask(newTask));
      const updatedTasks = [...tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [dispatch, tasks]
  );

  const handleMoveToCompleted = useCallback(
    (droppedItem) => {
      dispatch(toggleTaskCompletion(droppedItem.id));
      const updatedTasks = tasks.map((task) =>
        task.id === droppedItem.id ? { ...task, completed: true } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [dispatch, tasks]
  );

  const handleDeleteTask = useCallback(
    (id) => {
      dispatch(deleteTask(id));
      const updatedTasks = tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [dispatch, tasks]
  );

  const activeTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        !task.completed &&
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  const completedTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.completed &&
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="task-manager">
        <h1>Task Manager</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TaskForm onAdd={handleAddTask} />
        {loading && <p>Loading tasks...</p>}
        {error && <p>Error: {error}</p>}
        <div className="task-lists-container">
          <div className="task-list">
            <div className="task-list-header">
              <h2>Active Tasks</h2>
              <span>{activeTasks.length} tasks</span>
            </div>
            <TaskList
              tasks={activeTasks}
              onDelete={handleDeleteTask}
              onDragAndDrop={handleMoveToCompleted}
            />
          </div>

          <div className="task-list">
            <div className="task-list-header">
              <h2>Completed Tasks</h2>
              <span>{completedTasks.length} tasks</span>
            </div>
            <TaskList
              tasks={completedTasks}
              onDelete={handleDeleteTask}
              onDragAndDrop={handleMoveToCompleted}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default TaskManager;
