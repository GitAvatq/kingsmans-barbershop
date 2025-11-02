import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IAuth, IForm, ILoginForm } from "../types/auth.interface";

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
    login: build.mutation<IAuth, ILoginForm>({
      query: (data: ILoginForm) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
