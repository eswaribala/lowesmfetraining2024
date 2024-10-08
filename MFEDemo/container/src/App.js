import React from 'react';
import './App.css';
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Header Component...">
      <HeaderComponent/>
      </React.Suspense>
      <React.Suspense fallback="Loading Body Component...">
      <BodyComponent/>
      </React.Suspense>
      <React.Suspense fallback="Loading Footer Component...">
      <FooterComponent/>
      </React.Suspense>
    </div>
  );
}

export default App;
