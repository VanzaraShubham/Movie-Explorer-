import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  return (
    <header className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-red-500">
        🎬 Movie Explorer
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentPage("discover")}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === "discover"
              ? "bg-red-500 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Discover
        </button>

        <button
          onClick={() => setCurrentPage("watchlist")}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === "watchlist"
              ? "bg-red-500 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Watchlist
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-300">Hi, {username}</span>

        <button
          onClick={() => dispatch(logout())}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;