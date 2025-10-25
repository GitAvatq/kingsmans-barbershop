import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { Review } from "../types/rewievs.interface";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getReviews: build.query<Review[], void>({
      query: () => ({
        url: "rewievs",
        method: "GET",
      }),
      transformResponse: (response: { data: Review[] }) => response.data,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApi;
