import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery  } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";

export const fillialBarbers = createApi({
    reducerPath:"fillBarbers",
    baseQuery:fetchBaseQuery({
        baseUrl:basicUrl
    }),
    endpoints:(build) {
        getFBarbers:build.query({
            query:()=> ({
                url:""
            })
        })
    }
})