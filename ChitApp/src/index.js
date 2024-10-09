import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import store, {persistor} from "./reduxsrc/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById('chit-root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}>*/}
   <Router>
    <App name="Chit Application" />
   </Router>
    {/* </PersistGate>*/}
 </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
