import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from '../../container/src/store'
import App from "./App";
//mklink /D node_modules\host-app "../../host-app"
//Mount function to start the app
const root = ReactDOM.createRoot(document.getElementById('root'));

const mount=()=> {
    root.render(
        <React.StrictMode>
           <Provider store={store} >
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