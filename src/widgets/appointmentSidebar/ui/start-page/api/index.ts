import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";

export const cancelApi = createApi({
  reducerPath: "cancel",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    removeAppointment: build.mutation<void, number>({
      query: (id: number) => ({
        url: `appointments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useRemoveAppointmentMutation } = cancelApi;
