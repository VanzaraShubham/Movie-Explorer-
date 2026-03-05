import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }

    dispatch(login(username));
    navigate('/discover');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <Motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <Motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-white mb-6"
        >
          🎬 Movie Explorer
        </Motion.h1>

        <p className="text-gray-300 text-center mb-8">
          Login to explore movies & build your watchlist
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <Motion.div
            animate={error ? { x: [-8, 8, -6, 6, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <label className="block text-gray-300 mb-2">Username</label>

            <input
              autoFocus
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-red-500 
              focus:scale-[1.02] transition-all duration-200"
            />
          </Motion.div>

          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold
            shadow-lg hover:shadow-red-500/50 transition duration-300"
          >
            Login
          </Motion.button>
        </form>
      </Motion.div>
    </div>
  );
};

export default LoginForm;
