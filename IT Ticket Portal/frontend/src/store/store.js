import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import ticketReducer from "../features/tickets/ticketSlice";

import { ticketApi } from "./apis/ticketApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ticket: ticketReducer,

    [ticketApi.reducerPath]: ticketApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ticketApi.middleware
    ),
});