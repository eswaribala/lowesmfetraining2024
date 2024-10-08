import React from 'react';

//import HeaderComponent from "./HeaderComponent";
//import BodyComponent from "./BodyComponent";
//import FooterComponent from "./FooterComponent";
import loadable from '@loadable/component';
//Dynamically load the MicroApp from the remote module
const BodyComponent = loadable(() => import('bodyComponent/BodyComponent')); // This must match the 'exposes' path
const HeaderComponent = loadable(() => import('headerComponent/HeaderComponent')); // This must match the 'exposes' path
const FooterComponent = loadable(() => import('footerComponent/FooterComponent'));


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
