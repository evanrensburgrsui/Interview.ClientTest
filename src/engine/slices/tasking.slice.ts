import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getTaskGroups, getTasks, TaskDetailsModel, TaskGroupModel} from "../proxies/task.proxy";

export const $getTasks = createAsyncThunk("thunk-get-tasks", getTasks);
export const $getTaskGroups = createAsyncThunk("thunk-get-task-groups", getTaskGroups);

export const taskingSlice = createSlice({
  name: "tasking",
  initialState: {
    activeTasks: new Array<TaskDetailsModel>(),
    displayTasks: new Array<TaskDetailsModel>(),
    taskGroups: new Array<TaskGroupModel>(),
  },
  reducers: {
    setDisplayTasks: (state, action) => {
      state.displayTasks = action.payload;
    },
    setTaskGroupSelected: (state, action) => {
      // Update selected in taskGroups
      const group = state.taskGroups.find((g) => g.id === action.payload.id);
      if (group) group.selected = action.payload.selected;
    }
  },
  extraReducers(builder) {
    builder.addCase($getTasks.fulfilled, (state, action) => {
      state.activeTasks = action.payload;
    });
    builder.addCase($getTaskGroups.fulfilled, (state, action) => {
      state.taskGroups = action.payload;
    });
  },
});
export const {setDisplayTasks, setTaskGroupSelected} = taskingSlice.actions;
export default taskingSlice.reducer;
