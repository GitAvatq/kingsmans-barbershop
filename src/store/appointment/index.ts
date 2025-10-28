import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppointment {
  date: string | undefined;
  barberId: number | null;
  servicesId: number | null;
}

interface IAppointmentState {
  appointment: IAppointment;
}

const appointmentState: IAppointmentState = {
  appointment: {
    servicesId: null,
    barberId: null,
    date: undefined,
  },
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: appointmentState,
  reducers: {
    setService(state, action: PayloadAction<number>) {
      state.appointment.servicesId = action.payload;
    },
    setBarber(state, action: PayloadAction<number>) {
      state.appointment.barberId = action.payload;
    },
    setDate(state, action: PayloadAction<string | undefined>) {
      state.appointment.date = action.payload;
    },
    restoreAppointment(state, action) {
      state = action.payload;
    },
  },
});

export const appointmentActions = appointmentSlice.actions;
export const appointmentReducers = appointmentSlice.reducer;
