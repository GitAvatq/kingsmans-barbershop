import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IActiveState {
  nextPart: boolean;
}

const initalState: IActiveState = {
  nextPart: false,
};

export const activeSlice = createSlice({
  name: "active",
  initialState: initalState,
  reducers: {
    setNextPart(state, action: PayloadAction<boolean>) {
      state.nextPart = action.payload;
    },
  },
});

export const activeActions = activeSlice.actions;
export const activeReducers = activeSlice.reducer;
