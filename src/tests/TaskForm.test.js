import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

describe("TaskForm Component", () => {
  it("renders input and button", () => {
    render(<TaskForm onAdd={() => {}} />);
    expect(screen.getByPlaceholderText("Add Task")).toBeInTheDocument();
    expect(screen.getByText("Save Task")).toBeInTheDocument();
  });

  it("calls onAdd with correct data", () => {
    const mockOnAdd = jest.fn();
    render(<TaskForm onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText("Add Task");
    fireEvent.change(input, { target: { value: "New Task" } });

    const button = screen.getByText("Save Task");
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: "New Task",
      completed: false,
    });

    expect(input.value).toBe(""); // Το input πρέπει να καθαριστεί
  });
});
