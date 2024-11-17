import { render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { TestBackend } from "react-dnd-test-backend";
import TaskList from "../components/TaskList";

const mockTasks = [{ id: 1, title: "Test Task" }];

test("renders tasks correctly", () => {
  const { getByText } = render(
    <DndProvider backend={TestBackend}>
      <TaskList tasks={mockTasks} onDelete={() => {}} onToggle={() => {}} />
    </DndProvider>
  );

  expect(getByText("Test Task")).toBeInTheDocument();
});
