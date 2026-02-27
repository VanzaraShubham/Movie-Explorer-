// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Header from './components/Header';
// import Discover from './pages/Discover';
// import LoginForm from './components/LoginForm';
// import { AnimatePresence, motion as Motion } from "framer-motion";
// import WatchListPage from './pages/WatchlistPage';

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const [currentPage, setCurrentPage] = useState('discover');

//   if (!isAuthenticated) return <LoginForm />;

//   return (
//     <>
//       <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

//       <AnimatePresence mode="wait">
//         <Motion.div
//           key={currentPage}
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -40 }}
//           transition={{ duration: 0.35 }}
//         >
//           {currentPage === 'discover' ? <Discover /> : <WatchListPage />}
//         </Motion.div>
//       </AnimatePresence>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Discover from './pages/Discover';
import LoginForm from './components/LoginForm';
import { AnimatePresence, motion as Motion } from "framer-motion";
import WatchListPage from './pages/WatchlistPage';
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [currentPage, setCurrentPage] = useState('discover');

  if (!isAuthenticated) return <LoginForm />;

  return (
    <div className="min-h-screen bg-gray-950">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="px-4 sm:px-6 md:px-10">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {currentPage === 'discover' ? <Discover /> : <WatchListPage />}
          </Motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
