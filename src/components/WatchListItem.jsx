import { useDispatch } from "react-redux";
import {
  removeFromWatchlist,
  toggleWatched,
} from "../features/movies/moviesSlice";

const WatchListItem = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col">

      {/* Poster */}
      <div className="h-64 overflow-hidden">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x400?text=No+Image"
          }
          alt={movie.Title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        {/* Title */}
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.Title}
        </h3>

        {/* Year */}
        <p className="text-gray-400 text-sm mb-2">
          {movie.Year}
        </p>

        {/* Status */}
        <p className="text-sm mb-4">
          Status:{" "}
          <span
            className={
              movie.watched
                ? "text-green-400 font-semibold"
                : "text-red-400 font-semibold"
            }
          >
            {movie.watched ? "Watched" : "Not Watched"}
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-2">

          {/* Toggle Button */}
          <button
            onClick={() =>
              dispatch(toggleWatched(movie.imdbID))
            }
            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
              movie.watched
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {movie.watched ? "Mark Unwatched" : "Mark Watched"}
          </button>

          {/* Delete Button */}
          <button
            onClick={() =>
              dispatch(removeFromWatchlist(movie.imdbID))
            }
            className="px-3 py-2 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default WatchListItem;