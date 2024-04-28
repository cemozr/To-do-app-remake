import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: "",
  taskList: [],
  updateMode: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state) => {
      state.taskList = [...state.taskList, state.task];
      state.task = " ";
      state.updateMode = false;
    },
    updateTask: (state, action) => {
      state.updateMode = true;
      const willUpdate = state.taskList.filter((t, i) => i == action.payload);
      state.task = willUpdate;
      const newList = state.taskList.filter((t, i) => i !== action.payload);
      state.taskList = newList;
    },

    deleteTask: (state, action) => {
      const newList = state.taskList.filter((t, i) => i !== action.payload);
      state.taskList = newList;
    },
  },
});
export const { setTask, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
