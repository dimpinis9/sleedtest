import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";

const mockStore = configureStore([]);

describe("App Component", () => {
  test("renders the app correctly", () => {
    const store = mockStore({
      preferences: { theme: "light" },
      tasks: [],
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });
});
