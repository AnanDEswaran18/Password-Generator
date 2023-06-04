import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InsertData from './components/InsertData';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert-data" element={<InsertData />} />
      </Routes>
    </Router>
  );
};

export default App;
