import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMovies } from '../features/movies/moviesSlice';
import { motion as Motion } from 'framer-motion';
import Loader from './Loader';

const MovieGrid = () => {
  const dispatch = useDispatch();

  const { movies, page, hasMore, searchTerm, loading } = useSelector(
    (state) => state.movies
  );

  const loadMoreMovies = () => {
    if (!searchTerm) return;
    dispatch(
      fetchMovies({
        searchTerm,
        page: page + 1,
      })
    );
  };

  if (loading && page === 1 && searchTerm) {
    return <Loader />;
  }

  if (!loading && movies.length === 0 && searchTerm) {
    return <p>No movies found</p>;
  }

  if (!searchTerm) {
    return (
      <div className="text-center text-gray-400 mt-20">
        Search for movies to begin 🍿
      </div>
    );
  }
  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {' '}
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Motion.div>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
