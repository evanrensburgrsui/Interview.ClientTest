import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenticateUser } from "../proxies/user.proxy";

export const $authenticateUser = createAsyncThunk("thunk-auth-user", authenticateUser);

const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: null as string | null,
    isAuthenticated: false,
    accessToken: null as string | null,
    accessExpiration: null as number | null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase($authenticateUser.fulfilled, (state, action) => {
      // Immer handles these mutations
      state.displayName = action.payload.fullName || "Name Not Provided";
      state.accessToken = action.payload.accessToken;
      state.accessExpiration = action.payload.accessSeconds;
      state.isAuthenticated = true;
    });
    builder.addCase($authenticateUser.rejected, (state) => {
      state.displayName = "Who Are You?";
      state.isAuthenticated = false;
    });
  },
});
export default userSlice.reducer;
