import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";


//Mount function to start the app
const root = ReactDOM.createRoot(document.getElementById('root'));

const mount=()=> {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
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