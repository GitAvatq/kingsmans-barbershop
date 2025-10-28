import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IActiveState {
  nextPart: boolean;
  servicesPart: boolean;
  barbersPart: boolean;
  datePart: boolean;
}

const initalState: IActiveState = {
  nextPart: false,
  servicesPart: true,
  barbersPart: false,
  datePart: false,
};

export const activeSlice = createSlice({
  name: "active",
  initialState: initalState,
  reducers: {
    setNextPart(state, action: PayloadAction<boolean>) {
      state.nextPart = action.payload;
    },
    setServicesPart(state, action: PayloadAction<boolean>) {
      state.servicesPart = action.payload;
    },
    setBarbersPart(state, action: PayloadAction<boolean>) {
      state.barbersPart = action.payload;
    },
    setDatePart(state, action: PayloadAction<boolean>) {
      state.datePart = action.payload;
    },
  },
});

export const activeActions = activeSlice.actions;
export const activeReducers = activeSlice.reducer;
