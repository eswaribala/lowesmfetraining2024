import React from "react";
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AppRoutes from './routes'
function App() {
  return (
      <Router>
       <AppRoutes/>
      </Router>
  );
}

export default App;
