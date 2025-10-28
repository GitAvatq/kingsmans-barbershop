import { blogApi } from "@/app/services/ui/blog/api/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { barbersApi } from "../app/barbers/api";
import { barberDetailsApi } from "../app/barbers/[id]/api";
import { mastersApi } from "@/widgets/masters/api";
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

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [ctaApi.reducerPath]: ctaApi.reducer,
    [barbersApi.reducerPath]: barbersApi.reducer,
    [barberDetailsApi.reducerPath]: barberDetailsApi.reducer,
    [mastersApi.reducerPath]: mastersApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [fillialApi.reducerPath]: fillialApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [appointmentApi.reducerPath]:appointmentApi.reducer,
    user: userReducers,
    letterState: letterReducers,
    active: activeReducers,
    appointment: appointmentReducers,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(
      blogApi.middleware,
      ctaApi.middleware,
      barbersApi.middleware,
      barberDetailsApi.middleware,
      mastersApi.middleware,
      reviewApi.middleware,
      authApi.middleware,
      fillialApi.middleware,
      servicesApi.middleware,
      appointmentApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
