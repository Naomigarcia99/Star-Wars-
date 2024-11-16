import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StarshipDetails = () => {
  const { starshipName } = useParams();

  const starships = useSelector((state) => state.starships.starships);
  const starship = starships.find((e) => e.name === starshipName);

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
