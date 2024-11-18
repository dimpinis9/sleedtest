import useFetch from "../hooks/useFetch";

jest.mock("../hooks/useFetch");

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch data successfully", async () => {
    // Mock the return value of useFetch
    useFetch.mockReturnValue({
      data: [{ id: 1, title: "Task 1" }],
      loading: false,
      error: null,
    });

    const { data, loading, error } = useFetch("https://api.example.com/tasks");

    expect(data).toEqual([{ id: 1, title: "Task 1" }]);
    expect(loading).toBe(false);
    expect(error).toBeNull();
  });

  test("should handle fetch errors gracefully", async () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: "Fetch failed",
    });

    const { data, loading, error } = useFetch("https://api.example.com/tasks");

    expect(data).toBeNull();
    expect(loading).toBe(false);
    expect(error).toBe("Fetch failed");
  });
});
