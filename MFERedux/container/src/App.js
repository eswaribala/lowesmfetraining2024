import React from 'react'
import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "./dataslicer";
import MFE1 from 'mfe1/App';
import MFE2 from 'mfe2/App';
function App() {
  const dispatcher=useDispatch()
  useEffect(() => {
    dispatcher(getCountries());
  }, [dispatcher]);
  return (
    <div >
      <React.Suspense fallback="Loading Component 1...">
        <MFE1/>
      </React.Suspense>
      <React.Suspense fallback="Loading Component 1...">
        <MFE2 />
      </React.Suspense>
    </div>
  );
}

export default App;
