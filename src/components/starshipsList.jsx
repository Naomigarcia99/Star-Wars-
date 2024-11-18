import React, { useEffect } from "react";
import { useGetStarshipsQuery } from "../slices/apiSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../slices/starshipSlice";

const StarshipsList = () => {
  const dispatch = useDispatch();
  const { page, starships, hasMore, isLoadingMore } = useSelector(
    (state) => state.starships
  );

  const { data, error, isLoading, isFetching } = useGetStarshipsQuery(page);

  useEffect(() => {
    if (data && !isLoadingMore) {
      dispatch({ type: "starships/addStarships", payload: data.results });
    }
  }, [data, isLoadingMore, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5 &&
        hasMore &&
        !isLoading &&
        !isFetching
      ) {
        dispatch(incrementPage());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isLoading, isFetching, dispatch]);

  if (isLoading && page === 1) return <p>Loading starships data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="text-left">
      {starships.map((starship) => (
        <Link to={`/starship/${starship.name}`} key={starship.name}>
          <div className="my-4 bg-gray-800 h-20 w-3/4 mx-auto rounded-xl">
            <div className="ml-3 space-y-2 pt-3">
              <p className="font-semibold">{starship.name.toUpperCase()}</p>
              <p>{starship.model}</p>
            </div>
          </div>
        </Link>
      ))}
      {isLoading && <p>Loading more...</p>}
    </div>
  );
};

export default StarshipsList;
