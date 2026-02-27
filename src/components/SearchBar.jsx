import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, setSearchTerm } from '../features/movies/moviesSlice';
import { motion as Motion } from 'framer-motion';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    dispatch(setSearchTerm(search));
    dispatch(fetchMovies({ searchTerm: search, page: 1 }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-3 items-center justify-center mb-8 px-2">
      
      <div className="relative flex-1">
        
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search movies like Avengers, Batman..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full 
          bg-gray-800 text-white border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500
          transition duration-300"
        />
      </div>

      <Motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type='submit'
        className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700
        text-white font-semibold shadow-lg hover:shadow-red-500/40
        transition duration-300 whitespace-nowrap"
      >
        Search
      </Motion.button>
    </form>
  );
};

export default SearchBar;
