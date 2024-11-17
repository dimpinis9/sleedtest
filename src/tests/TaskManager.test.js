import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/taskSlice";
import TaskManager from "../components/TaskManager";

const renderWithRedux = (component) => {
  const store = configureStore({ reducer: { tasks: taskReducer } });
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

describe("TaskManager Component", () => {
  it("renders the task manager", () => {
    renderWithRedux(<TaskManager />);
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });

  it("adds a task", () => {
    const { store } = renderWithRedux(<TaskManager />);

    const input = screen.getByPlaceholderText("Add Task");
    fireEvent.change(input, { target: { value: "New Task" } });

    const button = screen.getByText("Save Task");
    fireEvent.click(button);

    const state = store.getState().tasks.items;
    expect(state).toHaveLength(1);
    expect(state[0]).toMatchObject({ title: "New Task", completed: false });
  });
  it("toggles dark mode", () => {
    renderWithRedux(<TaskManager />);
    const toggleButton = screen.getByText("Switch to Dark Mode");
    fireEvent.click(toggleButton);
    expect(screen.getByText("Switch to Light Mode")).toBeInTheDocument();
  });

  it("filters tasks based on search", () => {
    const { store } = renderWithRedux(<TaskManager />);
    store.dispatch(setTasks([{ id: 1, title: "Test Task", completed: false }]));

    const searchBar = screen.getByPlaceholderText("Search tasks...");
    fireEvent.change(searchBar, { target: { value: "Test" } });

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });
});
