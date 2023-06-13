import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/use-Fetch";
import CastItem from "./CastItem";

const Cast = ({ id }) => {
  const [cast, setCast] = useState();
  const { isLoading, error, getData } = useFetch();

  useEffect(() => {
    id &&
      getData(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`,
        setCast
      );
  }, [id]);

  return (
    <div className="flex flex-col items-left justify-left  gap-8  ">
      <div>
        <p className="font-semibold text-xl">Cast</p>
      </div>
      <div className="flex flex-row pb-5  items-start  gap-4 overflow-x-scroll ">
        {cast?.cast?.map((c) => (
          <CastItem
            key={c.id}
            id={c.id}
            name={c.original_name}
            char={c.character}
            profile={c.profile_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Cast;
