import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IAppointment } from "@/store/appointment";
import { RootState } from "@/store/store";

export const appointmentApi = createApi({
    reducerPath: "appointmentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: basicUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token
            if (token) headers.set("Authorization", `Bearer ${token}`)
            return headers;
        }
    }),
    tagTypes: ['Appointments'],
    endpoints: (build) => ({
        initializeAppointment: build.mutation<void, IAppointment>({
            query: (body) => ({
                url: "appointments",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Appointments"]
        }),
        getAppointments: build.query({
            query: () => ({
                url: "appointments/get",
                method: "GET"
            }),
            providesTags: ["Appointments"],
            transformResponse: (response: { data: any }) => response.data
        }),
    })
})

export const { useInitializeAppointmentMutation, useGetAppointmentsQuery } = appointmentApi