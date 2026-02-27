import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const Discover = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white px-8 py-6">
      <SearchBar />
      <MovieGrid />
    </div>
  );
};

export default Discover;