import React from 'react';
//import './App.css';
//import Component1 from "./Component1";

import loadable from '@loadable/component';

//Dynamically load the MicroApp from the remote module
const Component1App = loadable(() => import('component1/Component1')); // This must match the 'exposes' path
const Component2App = loadable(() => import('component2/Component2')); // This must match the 'exposes' path

function App() {
  return (
      <div className="App">
        <h1>Container Application</h1>
          <React.Suspense fallback="Loading Component 1...">
              <Component1App/>
          </React.Suspense>
          <React.Suspense fallback="Loading Component 1...">
              <Component2App/>
          </React.Suspense>
      </div>
  );
}

export default App;
