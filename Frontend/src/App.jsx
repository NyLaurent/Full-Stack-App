// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
