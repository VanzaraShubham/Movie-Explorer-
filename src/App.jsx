import { useSelector } from 'react-redux';
import Header from './components/Header';
import Discover from './pages/Discover';
import LoginForm from './components/LoginForm';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import WatchListPage from './pages/WatchListPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="min-h-screen bg-gray-950">
      {isAuthenticated && <Header />}
      <div className="px-4 sm:px-6 md:px-10">
        <AnimatePresence mode="wait">
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <Routes>
              <Route
                path="/login"
                element={
                  !isAuthenticated ? <LoginForm /> : <Navigate to="/discover" />
                }
              />

              <Route
                path="/discover"
                element={
                  isAuthenticated ? <Discover /> : <Navigate to="/login" />
                }
              />

              <Route
                path="/watchlist"
                element={
                  isAuthenticated ? <WatchListPage /> : <Navigate to="/login" />
                }
              />

              <Route
                path="*"
                element={
                  <Navigate to={isAuthenticated ? '/discover' : '/login'} />
                }
              />
            </Routes>
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
