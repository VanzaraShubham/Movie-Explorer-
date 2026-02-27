import { useSelector } from 'react-redux';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import WatchlistItem from '../components/WatchListItem';

const WatchListPage = () => {
  const watchlist = useSelector((state) => state.movies.watchlist);

  return (
    <div className="bg-gray-950 min-h-screen px-6 md:px-12 py-8 text-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">⭐ Your Watchlist</h2>

        <Motion.span
          key={watchlist.length}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold"
        >
          {watchlist.length} Movies
        </Motion.span>
      </div>

      {watchlist.length === 0 && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-24 text-gray-400"
        >
          <div className="text-6xl mb-4">🎬</div>
          <p className="text-xl">Your watchlist is empty.</p>
          <p className="text-sm mt-2">Start adding movies from Discover.</p>
        </Motion.div>
      )}

      <AnimatePresence>
        {watchlist.length > 0 && (
          <Motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          >
            {watchlist.map((movie) => (
              <Motion.div
                key={movie.imdbID}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <WatchlistItem movie={movie} />
              </Motion.div>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchListPage;
