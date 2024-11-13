import React from "react";
import { useParams } from "react-router-dom";
import { useGetStarshipsQuery } from "../slices/apiSlice";

const StarshipDetails = () => {
  const { starshipName } = useParams();
  const { data, error, isLoading } = useGetStarshipsQuery();

  if (isLoading) return <p>Loading starships details...</p>;
  if (error) return <p>Error loading starship details: {error.message}</p>;

  const starship = data.results.find((e) => e.name === starshipName);

  return (
    <div className="bg-gray-800">
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Atmospheric Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
    </div>
  );
};

export default StarshipDetails;
