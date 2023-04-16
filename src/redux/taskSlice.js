import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: action.payload.task,
        done: false,
      };
      state.push(newTask);
    },
    markAsDone: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].done = true;
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, markAsDone, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
