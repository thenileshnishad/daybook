import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  tagTypes: ["User", "Entries"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
