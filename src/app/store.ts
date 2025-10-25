import { blogApi } from "@/app/services/ui/blog/api/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ctaApi } from "./franchise/api";
import { barbersApi } from "./barbers/api";
import { barberDetailsApi } from "./barbers/[id]/api";
import { mastersApi } from "@/widgets/masters/api";
import { reviewApi } from "./services/ui/rewievs/api";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [ctaApi.reducerPath]: ctaApi.reducer,
    [barbersApi.reducerPath]: barbersApi.reducer,
    [barberDetailsApi.reducerPath]: barberDetailsApi.reducer,
    [mastersApi.reducerPath]: mastersApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(
      blogApi.middleware,
      ctaApi.middleware,
      barbersApi.middleware,
      barberDetailsApi.middleware,
      mastersApi.middleware,
      reviewApi.middleware
    ),
});

setupListeners(store.dispatch);
