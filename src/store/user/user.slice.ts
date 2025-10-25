import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeUser(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
