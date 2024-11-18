import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

describe("TaskForm Component", () => {
  test("adds a new task when the form is submitted", () => {
    const mockOnAdd = jest.fn();

    render(<TaskForm onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText("Add Task");
    fireEvent.change(input, { target: { value: "New Task" } });

    const button = screen.getByText(/save task/i);
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: "New Task",
      completed: false,
    });
  });
});
