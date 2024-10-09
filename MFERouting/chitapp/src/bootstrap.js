import React from 'react';
import ReactDOM from 'react-dom/client';

import store from "./reduxsrc/store/store";
import {BrowserRouter as Router} from "react-router-dom";
import {App} from "./App";
import {Provider} from "react-redux";
//Mount function to start the app
const root = ReactDOM.createRoot(document.getElementById('chit-root'));

const mount=()=> {
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

}

//if we are in development, call mount immediately
if(process.env.NODE_ENV === 'development'){

    mount();
}

//we are running through container export mount
export {mount};