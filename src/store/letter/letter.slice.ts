import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILetterState {
  letter: string;
}

const initialState:ILetterState = {
  letter: "",
};

export const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    setLetter(state, action: PayloadAction<string>) {
      state.letter = action.payload;
    },
  },
});

export const letterActions = letterSlice.actions;
export const letterReducers = letterSlice.reducer;
