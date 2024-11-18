import { render, screen } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { TestBackend } from "react-dnd-test-backend";
import TaskList from "../components/TaskList";

describe("TaskList Component", () => {
  const mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];

  test("renders tasks correctly", () => {
    render(
      <DndProvider backend={TestBackend}>
        <TaskList tasks={mockTasks} onDelete={jest.fn()} onToggle={jest.fn()} />
      </DndProvider>
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
