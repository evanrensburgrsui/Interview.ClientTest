import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTaskGroups, getTasks, TaskDetailsModel, TaskGroupModel } from "../proxies/task.proxy";

export const $getTasks = createAsyncThunk("thunk-get-tasks", getTasks);
export const $getTaskGroups = createAsyncThunk("thunk-get-task-groups", getTaskGroups);

export const taskingSlice = createSlice({
  name: "tasking",
  initialState: {
    activeTasks: new Array<TaskDetailsModel>(),
    taskGroups: new Array<TaskGroupModel>()
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase($getTasks.fulfilled, (state, action) => {
      state.activeTasks = action.payload;
    });
    builder.addCase($getTaskGroups.fulfilled, (state, action) => {
      state.taskGroups = action.payload;
    });
  },
});
export default taskingSlice.reducer;
