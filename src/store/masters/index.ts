import { DataBarbers } from "@/app/barbers/ui/listBarbers/types/listBarbers.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBarbersState {
  data: DataBarbers[];
}

const barbers: IBarbersState = {
  data: [],
};

export const barbersSlice = createSlice({
  name: "barbers",
  initialState: barbers,
  reducers: {
    setBarbers(state, action: PayloadAction<DataBarbers[]>) {
      state.data = action.payload;
    },
    clear(state) {
      state.data = [];
    },
  },
});

export const barbersActions = barbersSlice.actions;
export const barbersReducers = barbersSlice.reducer;
