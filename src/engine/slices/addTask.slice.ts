import {createSlice} from "@reduxjs/toolkit";

export const addTaskSlice = createSlice({
  name: "addTask",
  initialState: {
    description: "",
    selectedGroupId: 0,
  },
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setGroupId: (state, action) => {
      state.selectedGroupId = action.payload;
    }
  },
});
export const {setDescription, setGroupId} = addTaskSlice.actions;
export default addTaskSlice.reducer;