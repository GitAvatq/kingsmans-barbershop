import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IAuth, IForm } from "../types/auth.interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    register: build.mutation<IAuth, IForm>({
      query: (data: IForm) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation<IAuth, IAuth>({
      query: () => ({
        url: "login",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
