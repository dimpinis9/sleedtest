import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../hooks/useFetch";

describe("useFetch Hook", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and returns data", async () => {
    const mockData = [{ id: 1, title: "Task 1" }];
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/tasks")
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
  });

  test("handles API errors", async () => {
    global.fetch.mockRejectedValueOnce(new Error("API failure"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/tasks")
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("API failure");
  });
});
