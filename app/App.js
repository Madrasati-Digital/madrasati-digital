// مشروع مدرستي الرقمية - Frontend (React)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Welcome to Madrasati Digital</h1>} />
        <Route path='/login' element={<h1>Login Page</h1>} />
        <Route path='/student' element={<h1>Student Dashboard</h1>} />
        <Route path='/teacher' element={<h1>Teacher Dashboard</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
