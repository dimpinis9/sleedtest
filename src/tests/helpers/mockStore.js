import configureStore from "redux-mock-store";

export const getMockStore = (initialState) => {
  const mockStore = configureStore([]);
  return mockStore(initialState);
};
