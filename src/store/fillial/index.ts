import { DataBarbers } from "@/app/barbers/ui/listBarbers/types/listBarbers.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TFillialState {
  address: string;
  id?: number;
  barbers: DataBarbers[];
  city: string;
  country: string;
  createdAt?: string;
  updatedAt?: string;
}

const fillial: TFillialState = {
  address: "",
  country: "",
  barbers: [],
  city: "",
};

export const fillialSlice = createSlice({
  name: "fillial",
  initialState: fillial,
  reducers: {
    setFillial(state, action: PayloadAction<TFillialState>) {
      return action.payload;
    },
  },
});

export const fillialReducers = fillialSlice.reducer;
export const fillialActions = fillialSlice.actions;
