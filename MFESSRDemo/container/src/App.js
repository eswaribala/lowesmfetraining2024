import React from 'react';

import loadable from '@loadable/component';
//Dynamically load the MicroApp from the remote module
//const Component1 = loadable(() => import('bodyComponent/BodyComponent')); // This must match the 'exposes' path
//const Component2 = loadable(() => import('headerComponent/HeaderComponent')); // This must match the 'exposes' path
//const Component3 = loadable(() => import('footerComponent/FooterComponent'));


function App() {
  return (
      <div className="App">

        <h1>Container Application</h1>


      </div>
  );
}

export default App;
