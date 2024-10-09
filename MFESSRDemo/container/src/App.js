import React from 'react';

import loadable from '@loadable/component';
//Dynamically load the MicroApp from the remote module
const Component1App = loadable(() => import('headerComponent/HeaderComponent')); // This must match the 'exposes' path
const Component2App = loadable(() => import('bodyComponent/BodyComponent')); // This must match the 'exposes' path

const Component3App = loadable(() => import('footerComponent/FooterComponent')); // This must match the 'exposes' path


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
          <React.Suspense fallback="Loading Component 1...">
              <Component3App/>
          </React.Suspense>



      </div>
  );
}

export default App;
