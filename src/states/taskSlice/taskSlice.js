import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: "",
  taskList: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      state.taskList = [...state.taskList, state.task];
    },
  },
});
export const { setTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
