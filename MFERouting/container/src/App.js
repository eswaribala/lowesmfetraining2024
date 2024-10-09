import React from 'react'
import './App.css';
import ChitComponent from "./ChitComponent";
function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Component 1...">
        <ChitComponent/>
      </React.Suspense>
    </div>
  );
}

export default App;
