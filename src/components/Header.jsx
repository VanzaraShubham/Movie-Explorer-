import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Header = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  return (
    <header className="bg-gray-900 text-white shadow-lg px-4 sm:px-8 py-4">
      {/* ---------- MOBILE HEADER (UNCHANGED) ---------- */}
      <div className="sm:hidden">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-500">🎬 Movie Explorer</h1>
          <div
            className="flex items-center gap-2 px-3 py-1.5 
                bg-gradient-to-r from-gray-800 to-gray-700 
                rounded-full shadow-md"
          >
            <span className="text-gray-400 text-l font-bold sm:text-sm">Hi,</span>

            <span className="text-red-400 font-semibold text-sm sm:text-base">
              {username}
            </span>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setCurrentPage('discover')}
            className={`flex-1 py-2 rounded-lg ${
              currentPage === 'discover' ? 'bg-red-500' : 'bg-gray-800'
            }`}
          >
            Discover
          </button>

          <button
            onClick={() => setCurrentPage('watchlist')}
            className={`flex-1 py-2 rounded-lg ${
              currentPage === 'watchlist' ? 'bg-red-500' : 'bg-gray-800'
            }`}
          >
            Watchlist
          </button>

          <button
            onClick={() => dispatch(logout())}
            className="flex-1 bg-red-600 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ---------- DESKTOP HEADER ---------- */}
      <div className="hidden sm:flex items-center justify-between">
        {/* LEFT → Logo */}
        <h1 className="text-2xl font-bold text-red-500 whitespace-nowrap">
          🎬 Movie Explorer
        </h1>

        {/* CENTER → Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage('discover')}
            className={`px-5 py-2 rounded-lg transition ${
              currentPage === 'discover'
                ? 'bg-red-500'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Discover
          </button>

          <button
            onClick={() => setCurrentPage('watchlist')}
            className={`px-5 py-2 rounded-lg transition ${
              currentPage === 'watchlist'
                ? 'bg-red-500'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Watchlist
          </button>
        </div>

        {/* RIGHT → User + Logout */}
        <div className="flex items-center gap-4">
     
          <div
            className="flex items-center gap-2 px-3 py-1.5 
                bg-gradient-to-r from-gray-800 to-gray-700 
                rounded-full shadow-md"
          >
            <span className="text-gray-400 text-l font-bold sm:text-sm">Hi,</span>

            <span className="text-red-400 font-semibold text-sm sm:text-base">
              {username}
            </span>
          </div>

          <button
            onClick={() => dispatch(logout())}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;