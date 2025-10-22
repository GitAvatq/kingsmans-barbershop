import { blogApi } from "@/features/blog/blogApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(blogApi.middleware),
});

setupListeners(store.dispatch);
