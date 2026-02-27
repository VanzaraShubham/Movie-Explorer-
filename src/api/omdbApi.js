import axios from "axios";

const OMDB_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMoviesApi = async (searchTerm, page = 1) => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: OMDB_KEY,
      s: searchTerm,
      type:'movie',
      page,
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data;
};