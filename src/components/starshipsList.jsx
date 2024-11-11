import React from "react";
import { useGetStarshipsQuery } from "../slices/apiSlice";

const StarshipsList = () => {
  const { data, error, isLoading } = useGetStarshipsQuery()

  if (isLoading) return <p>Loading starships data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <>
      <ul>
        {data.results.map((starship) => (
          <li key={starship.name}>
            <strong>{starship.name}</strong> {starship.model}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StarshipsList;
