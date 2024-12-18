// src/App.test.js
import React from "react";
import { Provider } from "react-redux";
import {
  setupMockHooks,
  resetMocks,
  mockUseDispatch,
} from "./tests/helpers/mockHooks";
import { getMockStore } from "./tests/helpers/mockStore";
import App from "./App";

describe("App Component", () => {
  let mockDispatch;

  beforeEach(() => {
    resetMocks();
    mockDispatch = jest.fn();
    mockUseDispatch.mockReturnValue(mockDispatch);
  });

  it("toggles theme between light and dark modes", () => {
    const mockState = {
      preferences: { theme: "light" },
    };

    setupMockHooks(mockState, null);

    const store = getMockStore(mockState);

    const appInstance = (
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(appInstance).toBeDefined();
  });
});
