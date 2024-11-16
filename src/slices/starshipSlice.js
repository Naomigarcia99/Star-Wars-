import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const starshipSlice = createSlice({
  name: "starships",
  initialState: { starships: [], page: 1, hasMore: true, isLoadingMore: false },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
      state.isLoadingMore = true;
    },
    addStarships: (state, { payload }) => {
      const newStarships = payload.filter(
        (newStarship) =>
          !state.starships.some(
            (existingStarship) => existingStarship.name === newStarship.name
          )
      );
      state.starships.push(...newStarships);
      state.isLoadingMore = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getStarships.matchFulfilled,
      (state, { payload }) => {
        const newStarships = payload.results.filter(
          (newStarship) =>
            !state.starships.some(
              (existingStarship) => existingStarship.name === newStarship.name
            )
        );
        state.starships.push(...newStarships);
        state.hasMore = payload.next !== null;
        state.isLoadingMore = false;
      }
    );
  },
});

export const { incrementPage, addStarships } = starshipSlice.actions;

export default starshipSlice.reducer;
