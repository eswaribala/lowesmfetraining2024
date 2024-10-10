import React from 'react'
import './App.css';
import {Route,  Routes} from "react-router-dom";
import LoginComponent from "./components/LoginComponent/LoginComponent";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<LoginComponent />} />
        </Routes>

    </div>
  );
}

export default App;
