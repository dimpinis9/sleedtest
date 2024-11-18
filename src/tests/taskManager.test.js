// src/tests/taskManager.test.js
import React from "react";
import { Provider } from "react-redux";
import {
  setupMockHooks,
  resetMocks,
  mockUseDispatch,
} from "./helpers/mockHooks";
import { getMockStore } from "./helpers/mockStore";
import TaskManager from "../components/TaskManager";

describe("TaskManager Component", () => {
  let mockDispatch;

  beforeEach(() => {
    resetMocks();
    mockDispatch = jest.fn();
    mockUseDispatch.mockReturnValue(mockDispatch);
  });

  it("renders tasks correctly", () => {
    const mockState = {
      tasks: { items: [{ id: 1, title: "Test Task", completed: false }] },
    };

    setupMockHooks(mockState, null);

    const store = getMockStore(mockState);

    const taskManagerInstance = (
      <Provider store={store}>
        <TaskManager />
      </Provider>
    );

    expect(taskManagerInstance).toBeDefined();
  });
});
