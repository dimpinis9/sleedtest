export const mockUseSelector = jest.fn();
export const mockUseDispatch = jest.fn();
export const mockUseFetch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: (...args) => mockUseSelector(...args),
  useDispatch: (...args) => mockUseDispatch(...args),
}));

jest.mock("../../hooks/useFetch", () => ({
  useFetch: (...args) => mockUseFetch(...args),
}));

export const resetMocks = () => {
  jest.clearAllMocks();
  mockUseSelector.mockReset();
  mockUseDispatch.mockReset();
  mockUseFetch.mockReset();
};

export const setupMockHooks = (selectorState, fetchData) => {
  mockUseSelector.mockImplementation((selector) => selector(selectorState));
  mockUseDispatch.mockImplementation(() => jest.fn());
  mockUseFetch.mockReturnValue(fetchData);
};
