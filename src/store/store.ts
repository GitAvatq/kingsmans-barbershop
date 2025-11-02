import { blogApi } from "@/app/services/ui/blog/api/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { barbersApi } from "../app/barbers/api";
import { barberDetailsApi } from "../app/barbers/[id]/api";
import { reviewApi } from "../app/services/ui/rewievs/api";
import { authApi } from "@/features/auth/api";
import { ctaApi } from "@/features/cta-form/api";
import { userReducers } from "./user/user.slice";
import { servicesApi } from "@/app/services/api";
import { fillialApi } from "@/entities/fillial/api";
import { letterReducers } from "./letter/letter.slice";
import { activeReducers } from "./activeBar/indext";
import { appointmentReducers } from "./appointment";
import { appointmentApi } from "@/widgets/appointmentSidebar/api";
import { fillialReducers } from "./fillial";
import { barbersReducers } from "./masters";
import { cancelApi } from "@/widgets/appointmentSidebar/ui/start-page/api";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [ctaApi.reducerPath]: ctaApi.reducer,
    [barbersApi.reducerPath]: barbersApi.reducer,
    [barberDetailsApi.reducerPath]: barberDetailsApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [fillialApi.reducerPath]: fillialApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [cancelApi.reducerPath]: cancelApi.reducer,
    user: userReducers,
    letterState: letterReducers,
    active: activeReducers,
    appointment: appointmentReducers,
    masters: barbersReducers,
    fillialById: fillialReducers,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(
      blogApi.middleware,
      ctaApi.middleware,
      barbersApi.middleware,
      barberDetailsApi.middleware,
      reviewApi.middleware,
      authApi.middleware,
      fillialApi.middleware,
      servicesApi.middleware,
      appointmentApi.middleware,
      cancelApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
