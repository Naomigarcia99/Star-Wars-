import React from "react";
import { useGetStarshipsQuery } from "../slices/apiSlice";
import { Link } from "react-router-dom";

const StarshipsList = () => {
  const { data, error, isLoading } = useGetStarshipsQuery();

  if (isLoading) return <p>Loading starships data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="text-left">
      {data.results.map((starship) => (
        <Link to={`/starship/${starship.name}`}>
          <div key={starship.name} className="my-4 bg-gray-800">
            <strong>{starship.name}</strong>
            <div>{starship.model}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StarshipsList;
