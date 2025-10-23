import { blogApi } from "@/features/blog/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ctaApi } from "./franchise/api";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [ctaApi.reducerPath]: ctaApi.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(blogApi.middleware, ctaApi.middleware),
});

setupListeners(store.dispatch);
