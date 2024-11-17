import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFetch from "../hooks/useFetch";

test("fetches data successfully", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: "Task from API" }]),
    })
  );

  const { result } = renderHook(() =>
    useFetch("https://gorest.co.in/public/v2/todos")
  );

  await waitFor(() => {
    expect(result.current.data).toEqual([{ id: 1, title: "Task from API" }]);
  });

  global.fetch.mockRestore();
});

test("handles fetch error", async () => {
  global.fetch = jest.fn(() => Promise.reject("Fetch error"));

  const { result } = renderHook(() =>
    useFetch("https://gorest.co.in/public/v2/todos")
  );

  await waitFor(() => {
    expect(result.current.error).toBe("Fetch error");
  });

  global.fetch.mockRestore();
});
