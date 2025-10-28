import { IAuthData } from "@/features/auth/types/auth.interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const userPayloadFromStorage = localStorage.getItem("user-payload");

interface IState {
  token: string;
  user: IAuthData | null;
}

const initialState: IState = {
  token: localStorage.getItem("token") || "",
  user: userPayloadFromStorage ? JSON.parse(userPayloadFromStorage) : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser(state, action: PayloadAction<IAuthData>) {
      state.user = action.payload;
      localStorage.setItem("user-payload", JSON.stringify(action.payload));
    },
    logout(state) {
      state.token = "";
      state.user = null;
      localStorage.removeItem("user-payload");
      localStorage.removeItem("token");
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
