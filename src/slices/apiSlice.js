import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getStarships: builder.query({
      query: () => "starships",
    }),
  }),
});

export const { useGetStarshipsQuery } = apiSlice;