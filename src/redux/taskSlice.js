import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    toggleTaskCompletion: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTasks: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, setTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
