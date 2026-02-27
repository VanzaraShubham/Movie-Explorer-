/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist } from '../features/movies/moviesSlice';
import { motion as Motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.movies.watchlist);

  const alreadyAdded = watchlist.find((item) => item.imdbID === movie.imdbID);

  const handleAdd = () => {
    dispatch(addToWatchlist(movie));
  };
  return (
    <Motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {' '}
      {movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="h-64 flex items-center justify-center bg-gray-700 text-gray-400">
          No Image
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.Title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{movie.Year}</p>
        
        <Motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleAdd}
          disabled={alreadyAdded}
          className="w-full bg-red-500 py-2 rounded-lg"
        >
          {alreadyAdded ? 'Added ✅' : 'Add to Watchlist'}
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default MovieCard;
