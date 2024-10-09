import React from 'react'
import './App.css';
import {useSelector} from "react-redux";

function App() {
  const data = useSelector((state) => state.countries.data);
  const status = useSelector((state) => state.countries.status);

  return (
    <div className="App">
      <h2>MFE 2: Data Count</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>Total items: {data.length}</p>}
    </div>
  );
}

export default App;
