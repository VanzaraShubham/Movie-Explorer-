import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const watchlist = useSelector(
    (state) => state.movies.watchlist
  );

  if (watchlist.length === 0) {
    return (
      <div className="bg-gray-950 min-h-screen flex items-center justify-center text-gray-400 text-xl">
        Your watchlist is empty 🎬
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen px-8 py-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        ⭐ Your Watchlist
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {watchlist.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;