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
      const group = state.taskGroups.find((group) => group.id === action.payload.id);
      if (group) group.selected = action.payload.selected;
      else console.error("Group not found");
    },
    removeTask: (state, action) => {
      // Splice out the task from activeTasks
      const index = state.activeTasks.findIndex((task) => task.id === action.payload.id);
      if (index >= 0) state.activeTasks.splice(index, 1);
      else console.error("Task not found in activeTasks", state.activeTasks, action.payload);
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
export const {setDisplayTasks, setTaskGroupSelected, removeTask} = taskingSlice.actions;
export default taskingSlice.reducer;
