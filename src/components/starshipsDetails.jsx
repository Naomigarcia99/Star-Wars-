import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StarshipDetails = () => {
  const { starshipName } = useParams();

  const starships = useSelector((state) => state.starships.starships);
  const starship = starships.find((e) => e.name === starshipName);

  return (
    <div className="bg-gray-800 bg-opacity-75 text-left mt-16 rounded-xl w-3/5 mx-auto">
      <div className="ml-5 space-y-4 py-4">
        <h1 className="font-bold text-orange-300 text-center mb-8">
          {starship.name}
        </h1>
        <p>
          <strong>Model: </strong>
          {starship.model}
        </p>
        <p>
          <strong>Manufacturer: </strong>
          {starship.manufacturer}
        </p>
        <p>
          <strong>Cost in credits: </strong>
          {starship.cost_in_credits}
        </p>
        <p>
          <strong>Length: </strong>
          {starship.length}
        </p>
        <p>
          <strong>Atmospheric Speed: </strong>
          {starship.max_atmosphering_speed}
        </p>
        <p>
          <strong>Crew: </strong>
          {starship.crew}
        </p>
      </div>
    </div>
  );
};

export default StarshipDetails;
