import { blogApi } from "@/features/blog/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ctaApi } from "./franchise/api";
import { barbersApi } from "./barbers/api";
import { barberDetailsApi } from "./barbers/[id]/api";
import { mastersApi } from "@/widgets/masters/api";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [ctaApi.reducerPath]: ctaApi.reducer,
    [barbersApi.reducerPath]: barbersApi.reducer,
    [barberDetailsApi.reducerPath]: barberDetailsApi.reducer,
    [mastersApi.reducerPath]: mastersApi.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(
      blogApi.middleware,
      ctaApi.middleware,
      barbersApi.middleware,
      barberDetailsApi.middleware,
      mastersApi.middleware
    ),
});

setupListeners(store.dispatch);
