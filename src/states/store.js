import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});
