import { useState, useEffect } from "react";
import useFetch from "../hooks/use-Fetch";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setMovies }) => {
  const [key, setKey] = useState("");
  const { getData } = useFetch();

  useEffect(() => {
    key &&
      getData(
        `https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${key}`,
        setMovies
      );
  }, [key]);
  return (
    <div className="flex flex-row justify-center align-center p-4 w-full">
      <input
        type="text"
        className="border border-black py-1 pl-1 text-base sm:w-4/12 transition-all 1s linear outline-none sm:focus:w-6/12 focus:rounded-l-lg text-gray-500"
        placeholder="Search..."
        onChange={(e) => setKey(e.target.value)}
      />
      <button className="bg-black text-white px-3">
        <AiOutlineSearch color="white" fontSize="1.1rem" />
      </button>
    </div>
  );
};

export default SearchBar;
