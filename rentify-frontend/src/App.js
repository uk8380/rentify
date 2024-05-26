// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Properties from './pages/Properties';
// import PostProperty from './pages/PostProperty';

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem('token');
  
 


//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={isAuthenticated ? <Navigate to="/properties" /> : <Login/>} />
//         <Route path="/register" element={isAuthenticated ? <Navigate to="/properties" /> : <Register />} />
//         <Route path="/properties" element={isAuthenticated ? <Properties /> : <Navigate to="/login" />} />
//         <Route path="/post-property" element={isAuthenticated ? <PostProperty /> : <Navigate to="/login" />} />
     
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';
import PostProperty from './pages/PostProperty';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/properties" /> : <Login/>} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/properties" /> : <Register />} />
        <Route path="/properties" element={isAuthenticated ? <Properties /> : <Navigate to="/login" />} />
        <Route path="/post-property" element={isAuthenticated ? <PostProperty /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
