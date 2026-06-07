import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketApi = createApi({
  reducerPath: "ticketApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),

  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "tickets",
    }),
  }),
});

export const {
  useGetTicketsQuery,
} = ticketApi;